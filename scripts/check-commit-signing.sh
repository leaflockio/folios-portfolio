#!/bin/sh

# -----------------------------------------------------------------------------------
# Script: check-commit-signing.sh
# Purpose: Prevents commits that are not cryptographically signed (GPG or Gitsign).
# This ensures trust and accountability, especially in secure or open source workflows.
#
# Example usage (inside .husky/pre-commit or pre-push):
#   scripts/check-commit-signing.sh || exit 1
# -----------------------------------------------------------------------------------

. "$(dirname "$0")/utils.sh"

echo ""
log_info "Verifying commit signature..."

# Get the remote tracking branch
REMOTE_BRANCH=$(git rev-parse --abbrev-ref --symbolic-full-name @{upstream} 2>/dev/null)

if [ -z "$REMOTE_BRANCH" ]; then
  # New branch - check if commits exist on origin/main
  if git rev-parse --verify origin/main >/dev/null 2>&1; then
    NEW_COMMITS=$(git rev-list origin/main..HEAD 2>/dev/null)
  else
    NEW_COMMITS=$(git rev-list HEAD 2>/dev/null)
  fi
else
  # Existing branch - get commits not on remote
  NEW_COMMITS=$(git rev-list "$REMOTE_BRANCH"..HEAD 2>/dev/null)
fi

# If no new commits, nothing to check
if [ -z "$NEW_COMMITS" ]; then
  log_success "No new commits to verify."
  exit 0
fi

# Check each new commit
for COMMIT in $NEW_COMMITS; do
  SIGNATURE_INFO=$(git log --show-signature -1 "$COMMIT" 2>/dev/null)

  if echo "$SIGNATURE_INFO" | grep -qE "Good signature|gitsign: Good signature"; then
    log_success "Commit $COMMIT is signed and verified."
  else
    log_error "Commit $COMMIT is not signed!"
    log_info "Please sign your commit using GPG or Gitsign before pushing."
    echo "🔗 Refer to: https://docs.github.com/en/authentication/managing-commit-signature-verification"
    exit 1
  fi
done

exit 0
