#!/bin/sh

# -----------------------------------------------------------------------------------
# Script: check-branch.sh
# Purpose: Prevents direct commits or pushes to protected branches like `main`.
# Encourages contributors to use dev, feature, or release branches with Pull Requests.
#
# Example usage (in .husky/pre-commit or pre-push):
#   scripts/check-branch.sh || exit 1
# -----------------------------------------------------------------------------------

. "$(dirname "$0")/utils.sh"

# Whitelist bots in CI environments (allows semantic-release to push)
if [ "$CI" = "true" ]; then
  ALLOWED_BOTS="github-actions[bot] dependabot[bot] semantic-release-bot"
  if echo "$ALLOWED_BOTS" | grep -qw "$GITHUB_ACTOR"; then
    log_success "Branch check skipped for bot: $GITHUB_ACTOR"
    exit 0
  fi
fi

PROTECTED_BRANCHES="main master pre-main"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if echo "$PROTECTED_BRANCHES" | grep -wq "$CURRENT_BRANCH"; then
  echo ""
  log_error "You are on a protected branch: '$CURRENT_BRANCH'"
  log_info "Direct commits or pushes to this branch are not allowed."
  echo "👉 Please use a feature, dev, or release branch and submit a Pull Request."
  exit 1
else
  log_success "Branch check passed: Working on '$CURRENT_BRANCH'"
  exit 0
fi
