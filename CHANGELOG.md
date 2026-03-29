## [1.0.0-beta.6](https://github.com/leaflockio/folios-portfolio/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2026-03-29)

### Bug Fixes

* **config:** correct logger tag minimum length validation ([#37](https://github.com/leaflockio/folios-portfolio/issues/37)) ([5e4f5fe](https://github.com/leaflockio/folios-portfolio/commit/5e4f5fe2b15948a861e8b4041edf844f0d5cec77))

## [1.0.0-beta.6](https://github.com/leaflockio/folios-portfolio/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2026-03-28)

### Bug Fixes

* **config:** correct logger tag minimum length validation ([#37](https://github.com/leaflockio/folios-portfolio/issues/37)) ([7e547a1](https://github.com/leaflockio/folios-portfolio/commit/7e547a107e50e750380f4a29bf76dbbe9bfaabe0))

## [1.0.0-beta.5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2026-02-12)

### Features

* **custom-sections:** add gallery, list, text, and timeline types ([97d661c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/97d661c036823025ea4805eb0499e7677581712c))
* **icons:** add code platform and navigation icons ([00a3eb2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00a3eb28b28a307f0f107b215e19bbd40344b56e))
* **icons:** add custom section icon support ([5617b64](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5617b64c199a52133520387ca2d55336b22b973b))
* **schema:** add SSRF protection and safe URL validation ([63dc4b3](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/63dc4b3d2a56bf4207f8fab46f71c5943302101d))
* **sections:** add pagination and custom section types ([083cb43](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/083cb43a23a0bf9823116737ea9e068b81c7341a))
* **security:** add CSP and referrer-policy meta tags ([e353fab](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/e353fabc29c0a32bbe2e52d890d46645a921b338))
* **ui:** add expandable components (toggle, list, text) ([f3fad2e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f3fad2efc8805e23d4e023482184faf2d7e7bd03))
* **ui:** add Pagination and SkillPill components ([9828491](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9828491fd3a534c65ed5f8f7bb681590f0b849c5))
* **ui:** add Timeline component with dot and item primitives ([2c96234](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/2c962340178ddf5b63d5ed0528da4a3e61c91de4))

### Bug Fixes

* **portfolio:** enable dynamic section rendering ([00a5c46](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00a5c465242aefec0cbf15d156d000f5d32fb412))
* **SectionNav:** add pagination to mobile dropdown for overflow handling ([3e555f5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3e555f596f7f286cef4f5a28f2b7f3ad30401808))

### Refactoring

* **ExpandableList:** remove toggleVariant prop, hardcode chip variant ([179862a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/179862ac108941903ccda93be9c1ee36b587b4f8))
* **ExpandToggle:** rename variants to text/chip, extract enum, fix collapse scroll centering ([80ccf5b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/80ccf5ba9e0d94700a5ed5db5946a4a71952d8cd))
* **Experience:** use shared Timeline component ([46c8919](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/46c8919886357763559b6515c8b2255ef04dac26))
* **sections:** improve responsiveness and add expandable content ([31f5bf1](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/31f5bf10263e068d7b31cab3adf56d8a9f66f6f2))
* **sections:** replace variant magic strings with ExpandToggleVariant constant ([57ec5eb](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/57ec5eb04ead1234c511889bd6328cd6615c0be7))
* **TimelineSection:** use shared Timeline component ([f2cce53](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f2cce537590f84296711b1560e4eb4415de70855))

## [1.0.0-beta.4](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2026-02-09)

### Features

* **contact:** refactor with conversational layout and status badges ([061c45a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/061c45a28ab3fde82e34b89ff10a78b87b4e1b47))
* **icons:** add ArrowLeftIcon and MapPinIcon ([345ced4](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/345ced4ff818b55c1213d02186d7798cbfd365fa))
* **portfolio:** add Contact section to page layout ([6721205](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/6721205a3a83e3ba1d0038862bb102fe8a59840d))
* **profile:** add availability badges and contact headline ([49b5d48](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/49b5d4821c2b980aa162691a7d332d8a30c6481b))
* **profile:** add availability badges config ([89d0904](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/89d0904981e9a12ed4cf2b3f0951309beb86ddeb))
* **schema:** add availability badge validation ([a58f919](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a58f919ab35ab479249e309159edb967743e377e))
* **schema:** add availability badges and contact headline ([6f3a5c5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/6f3a5c575527afb7e993e15bccc3d452adc1508c))
* **ui:** add reusable StatusBadge component ([fc685d0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/fc685d0aa240c553f45da9b9dff2351915f686ae))

### Bug Fixes

* **config:** ignore SARIF files in Prettier checks ([b55d43e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b55d43e8c3346c3cff37da6c5add1a6fabfc9723))
* **layout:** make footer sticky at bottom of viewport ([350015d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/350015df39ad5002647e0aa22b2bc1dde7d403a7))
* **section-nav:** improve mobile dropdown styling and alignment ([460e03a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/460e03a29571e1c0a6ccfa39630881320029506b))
* **section-nav:** increase mobile button touch target ([00c97f1](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00c97f178b829b8594ff02ae44e54a8cfbe2ecad))
* **theme:** use consistent button size across breakpoints ([5037323](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/503732340e4cdac38bcd4e54d31ea66ea34409a9))

## [1.0.0-beta.3](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2026-02-08)

### Features

* **section-nav:** add long-press tooltips and floating button tooltip for mobile ([8a09a44](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/8a09a449176eedd4c45dc3368ad354765fbc6912))
* **socials:** add long-press tooltips and improve mobile touch targets ([31b702c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/31b702cd21eb19e8268370f0d15e27520c3ccb5e))

### Bug Fixes

* **portfolio:** adjust mobile padding for floating sidebars ([1748de1](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/1748de13f86ac38fe07152b740cd04095228f661))

## [1.0.0-beta.2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2026-02-08)

### Features

* add dynamic document title from profile data ([e3d77e2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/e3d77e2f01bc4215a33e9c7875e8b1edfda30259))
* **app:** wire PortfolioPage into main app routing ([7185d04](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7185d0480a3594f91446e29d1cfae8edb3c574f6))
* **hero:** add rotating headlines, expandable bio, and mobile responsive sizing ([6ae6dfb](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/6ae6dfb3f6dc655b7ad12df610f61fcd1b367658))
* **icons:** add icon system with section, social, and fallback mappings ([bbaa07a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/bbaa07a7c82a8877c4b691944300933aaf5d1715))
* **icons:** add project fallback icon pool and getter ([8655c99](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/8655c990024f5c6e597166fd7a7c5f4ba0dc6460))
* **pages:** add PortfolioPage with section ordering and prop wiring ([804d9c7](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/804d9c7e08d62508228a3a369e5f4ac9526f2934))
* **schema:** add full profile validation with sections, displayText, and reusable linkSchema ([be3e319](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/be3e319c9abf5d009519080086336bd8699f2d1d))
* **schema:** add prefix and suffix fields to copyright config ([7484703](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7484703987d4824a27aebc6224d701f418eeff2b))
* **schema:** allow nullable logos, add greetings and sectionOrder to profile ([4b8c474](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4b8c4746e68fdf9e56c0d53fee7d4b1890d8ca8a))
* **sections:** add all portfolio section components ([d9be04d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d9be04d99bcc1bbd30b882034abbb30a258641ac))
* **sections:** add all portfolio section components ([c3f4ab3](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c3f4ab37be5305afc54568960be770eca2a97e65))
* **ui:** add mobile responsive dropdown to section navigation ([7ce9c61](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7ce9c61d183dfa1a8fdc5130b58fa120c487d476))
* **ui:** add SectionHeading component ([24d6995](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/24d69957600b908bab6e388c6086af62262cda32))
* **utils:** add formatDate helper for human-readable date strings ([094e2e3](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/094e2e31c60531b6572687134c8103ae7025fac1))

### Bug Fixes

* **certifications:** use inline style for border with CSS variable opacity ([a146668](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a146668cd5b37f3ed55636d7e8a7a7eeac84b167))
* **layout:** make footer sticky with solid background, support copyright prefix/suffix ([31f6fdb](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/31f6fdbbcdc4db6b87b54ac445b5711819df1287))
* **layout:** make preview banner sticky with solid background ([a1850f9](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a1850f92fba8dcee7a0bf4857e23f33921322650))
* **layout:** use flexbox to prevent page scroll with minimal content ([a1b9d81](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a1b9d8124eead41409e61508db37a1f8cafdc0b4))
* replace object bracket lookups with Map to resolve object-injection warnings ([0e33273](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0e33273eb90c115dafc5b5bcc980e76c28a49727))
* **schema:** allow empty string for optional avatar field ([1faf95c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/1faf95c325daa0c2a4b2443841cb43e5d3683289))
* **sections:** use inline styles for CSS variable opacity and add missing JSDoc ([7a5a270](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7a5a270708162916d0669828b66c40b46a90587a))
* **skills:** use inline style for background with CSS variable opacity ([4b59667](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4b59667104c0afaf5eb2f9773b048048a6346a51))
* **styles:** use overflow-x clip to prevent horizontal scroll without breaking sticky ([b05c298](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b05c298ef2eaf4b68773bcb1970c755c1e6eedcb))
* **ThemeSelector:** make button responsive for mobile ([481595b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/481595bda8edbe910819c765fc5138d3c260983e))

### Refactoring

* **portfolio:** use explicit getProps to avoid dynamic property access ([76e5d6d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76e5d6d0eac4c83f8bb405243a96f445dadddbad))

## 1.0.0-beta.1 (2026-02-08)

### Features

* **assets:** add static favicon.svg and update index.html reference ([4aec1fd](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4aec1fdd43c253e2e246fd887dc765790e2c2064))
* **ci:** add branch protection and PR gate for main ([4fab2d4](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fab2d40eeeefce84c60d4a25620a694e61b9419))
* **ci:** add environment secrets for DDP config ([5d7dc22](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5d7dc22ecdad24c901b8e72e5989259e0ad651c7))
* **ci:** add GPG signing for bot commits and fix signature verification ([9b20233](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9b20233867830270deeed52cf3614c5c86098f0c))
* **ci:** add QA build mode and preview environment banner ([05581b0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/05581b01b7f51ed2e45be5493186c2f2dffed950))
* **ci:** add semantic-release for automated versioning ([2ae5d02](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/2ae5d02df7b40651033b9bd37fe4cf0edd9c9cfd))
* **ci:** import GPG key in release workflows for commit signing ([f164fcd](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f164fcdb8115e962896549adbfc6b44924c3237c))
* **ci:** use RELEASE_TOKEN for bot commits and add verify to PR gate ([aee2642](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/aee2642d5c618fac8b541bd995ff5f48ec0d42db))
* **config:** add centralized project config with schema validation ([db98d34](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/db98d342ff18e12c6dfea9420817880fd4f64524))
* **context:** add app state schemas and validation ([ca67615](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ca67615f193bb22815b603fbaf65925e56888d28))
* **context:** add AppStateContext and provider with validation ([a6f4147](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a6f4147962f2131eeb46be45e6ae483a66c8467d))
* display app version in footer and console ([76e0afc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76e0afc50daf7e709e355c8bff8dc78e76721a4e))
* **hooks:** add useAppState hook for context access ([9117be8](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9117be863d67c59a84a42a2dc36751d03364782d))
* **hooks:** add useDynamicFavicon hook ([f6fe209](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f6fe2093f925954d578ecc988e6a706194c88015))
* **icons:** add cloudOff, envelope, and phone icons ([cc4897d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cc4897dcb336482e4bebf82dff9977b94e30ad1f))
* **icons:** add FaviconIcon component and remove unused assets ([a817675](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a81767586b4dda13633647b292945f72722fb901))
* **layout:** add copyright footer from app state ([3d7e6cc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d7e6cc865d7ba4ee9d477634317bfb425f3a99b))
* **layout:** add Layout component with ThemeSelector and dynamic favicon ([52ef549](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/52ef54993bf938c1185f0549e49c29bff9c61fa4))
* **lint:** enforce strict naming conventions for variables, functions, constants, and classes ([ffb91fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ffb91fa568cf47aca42af3d046e0f01827abe0bf))
* **logger:** add timestamp formatting utility and enhance log formatting ([ee01f46](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ee01f460387aa0da7395f19bf567a2a173f837e6))
* **logging:** add centralized logger with env-based levels and timestamped output ([bfec49c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/bfec49c9cb8f470234b94db899c9105dda09d632))
* **logging:** add debug logs to ThemeProvider, Layout, and ErrorPage ([b118f6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b118f6ccfd13b421cb3406730c5da5901e199a27))
* **pages:** add ErrorPage with fallback contact info display ([74e8a86](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/74e8a86fee2577fc9ea9b877d0f2d236ce914021))
* scaffold Vite + React app structure ([42f2914](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/42f2914abd83c5cb58bfe18b3585bf9fb4a0ed9c))
* **source:** add dummy fallback contact info for error page ([7103c11](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7103c1147caac797e0d04644a19d8cbeb4080bc6))
* **source:** add source and profile schema with validation logic ([00df96c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00df96c0106a9bcb8e88ba6399a97ffcc0f9b737))
* **theme:** add theme context, provider, and hook with system and localStorage support ([d14d6fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d14d6fa6c02c63ab97fb07c0767826967190208b))
* **theme:** add ThemeSelector component with system theme support ([c81fae5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c81fae52e93f91b7871f80bad37f5d5671c2f7d4))
* **ui:** add Dropdown component ([e78c2bf](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/e78c2bfe4a1b0cb23d81f8f09720680c02ecd162))
* **ui:** add Tooltip component ([7b2ca89](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b2ca899841f81be5946dc97da9633c608c75ec2))

### Bug Fixes

* **ci:** disable husky hooks in semantic-release step ([d778743](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d7787435aa8c7f8462635c3f3e06938fa1a0e9f0))
* **config:** ignore CHANGELOG.md in Prettier checks ([ce27557](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ce27557bd480691a5d9e613a9843c43083447431))
* correct import casing for validate module ([5714256](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5714256872ba7704a38d3cf94d4df728ae1b507c))
* **docker:** ensure scripts and husky copied before npm install ([7b405dc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b405dc4972833a561822905dc5922eafe378e2e))
* **eslint:** remove formatting rules that conflict with Prettier ([3d3a60b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d3a60b8aa9a4a6d960c48e88b9c9ac9eec15dba))
* **hooks:** only check new commits for GPG signatures ([0d0dc63](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0d0dc63817553212fe617760bcd6a874de4e6dad))
* **hooks:** run npm verify on pre-push for CI consistency ([0e38c13](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0e38c130c168d52c5173fa684645104270d82c9a))
* **hooks:** whitelist bots for CI pushes to protected branches ([999bead](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/999bead3fff4d41b3be78e7ba4f8535e0af3023e))
* **imports:** correct Dropdown path case sensitivity ([f930ea9](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f930ea9146a4628f531d278bbe647c6a776d0509))
* improve commit-signing check to support gitsign and GPG signatures ([f181b43](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f181b4304f7aeca1aec2d5a562e36052c990fb92))
* **source:** replace top-level await with async loader function ([4fa772b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fa772b77d788749e83440c7de22c9e142d90a22))
* **theme:** improve contrast for dark and verdant themes ([6101366](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/61013667af852859c961e121e65a24a0a9af1b30))
* update badge links and correct file paths in README.md ([b3c4568](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b3c4568f8f14b863f0b3b18a6fca0cdf8707e607))

### Refactoring

* **app:** integrate Layout and ErrorPage components ([ce62e6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ce62e6c90239c2070843cbfdd62bb06614923d3f))
* **app:** use AppStateContext for state management ([154628c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/154628c4b833d51d27bdd57341eb24ca366dd125))
* **config:** remove source schema from config ([c952931](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c9529312d0c405dad20577e3b5b570edbef8c86f))
* **config:** remove unused theme colors from config.json and schema ([a21c990](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a21c9907170e09ad319347d80385a3e65bc17c0c))
* **error-page:** rename source prop to envConfig ([170da4e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/170da4ef49e76c22bbb2146849107f1bbe2b68b2))
* **hooks:** migrate remaining hook scripts to shared utils ([be1136a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/be1136ab231c73edecad2f5737eb1c7c282a40d0))
* **icons:** consolidate icons with factory pattern ([8fc82a5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/8fc82a54d88d406c5864eccab22ece60cd7aa47c))
* improve logging messages and enhance secret scanning script ([a1a30e0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a1a30e07948319d3b461ca257a1e62211d03cafb))
* remove source.json and related validation ([a951c0c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a951c0ce148140d5cb36a7745aae307fa6019ef0))
* remove unused ESLint rule and clean up Vite config comments ([10e284c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/10e284c11f170483669f53e91a62b522900b80e6))
* replace static favicon with dynamic placeholder ([23df3a6](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/23df3a6daf5b029dda1fb5f97950a3b7cfaabed9))
* **schema:** change phone field to object with countryCode and number ([cec3ab2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cec3ab2f7cdfc745f9dec6df5e668dd516dbd2f1))
* **scripts:** extract common logging + color logic into utils.sh ([b53429e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b53429ebd508c6c219189182de888ceafd4cfe53))
* simplify App component and enhance theme integration ([fbfd01a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/fbfd01a3fc547763fe3cd02e66090ef9413439a9))
* update theme configuration to include 'verdant' and remove unused color definitions ([19aa07d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/19aa07d10f7f6b40062833234382065d0b930089))
* **validate:** extract phone builder to fix linter conflict ([c255fee](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c255fee56a0965935085d9c9b136add8f7bb12fe))
* **validate:** revert to inline ternary for phone object ([3eb057f](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3eb057f87a5f87f7027501d6ab066fb2a2457f2e))

## 1.0.0-beta.1 (2026-02-08)

### Features

* **assets:** add static favicon.svg and update index.html reference ([4aec1fd](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4aec1fdd43c253e2e246fd887dc765790e2c2064))
* **ci:** add branch protection and PR gate for main ([4fab2d4](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fab2d40eeeefce84c60d4a25620a694e61b9419))
* **ci:** add environment secrets for DDP config ([5d7dc22](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5d7dc22ecdad24c901b8e72e5989259e0ad651c7))
* **ci:** add GPG signing for bot commits and fix signature verification ([9b20233](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9b20233867830270deeed52cf3614c5c86098f0c))
* **ci:** add QA build mode and preview environment banner ([05581b0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/05581b01b7f51ed2e45be5493186c2f2dffed950))
* **ci:** add semantic-release for automated versioning ([2ae5d02](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/2ae5d02df7b40651033b9bd37fe4cf0edd9c9cfd))
* **ci:** import GPG key in release workflows for commit signing ([f164fcd](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f164fcdb8115e962896549adbfc6b44924c3237c))
* **ci:** use RELEASE_TOKEN for bot commits and add verify to PR gate ([aee2642](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/aee2642d5c618fac8b541bd995ff5f48ec0d42db))
* **config:** add centralized project config with schema validation ([db98d34](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/db98d342ff18e12c6dfea9420817880fd4f64524))
* **context:** add app state schemas and validation ([ca67615](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ca67615f193bb22815b603fbaf65925e56888d28))
* **context:** add AppStateContext and provider with validation ([a6f4147](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a6f4147962f2131eeb46be45e6ae483a66c8467d))
* display app version in footer and console ([76e0afc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76e0afc50daf7e709e355c8bff8dc78e76721a4e))
* **hooks:** add useAppState hook for context access ([9117be8](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9117be863d67c59a84a42a2dc36751d03364782d))
* **hooks:** add useDynamicFavicon hook ([f6fe209](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f6fe2093f925954d578ecc988e6a706194c88015))
* **icons:** add cloudOff, envelope, and phone icons ([cc4897d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cc4897dcb336482e4bebf82dff9977b94e30ad1f))
* **icons:** add FaviconIcon component and remove unused assets ([a817675](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a81767586b4dda13633647b292945f72722fb901))
* **layout:** add copyright footer from app state ([3d7e6cc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d7e6cc865d7ba4ee9d477634317bfb425f3a99b))
* **layout:** add Layout component with ThemeSelector and dynamic favicon ([52ef549](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/52ef54993bf938c1185f0549e49c29bff9c61fa4))
* **lint:** enforce strict naming conventions for variables, functions, constants, and classes ([ffb91fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ffb91fa568cf47aca42af3d046e0f01827abe0bf))
* **logger:** add timestamp formatting utility and enhance log formatting ([ee01f46](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ee01f460387aa0da7395f19bf567a2a173f837e6))
* **logging:** add centralized logger with env-based levels and timestamped output ([bfec49c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/bfec49c9cb8f470234b94db899c9105dda09d632))
* **logging:** add debug logs to ThemeProvider, Layout, and ErrorPage ([b118f6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b118f6ccfd13b421cb3406730c5da5901e199a27))
* **pages:** add ErrorPage with fallback contact info display ([74e8a86](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/74e8a86fee2577fc9ea9b877d0f2d236ce914021))
* scaffold Vite + React app structure ([42f2914](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/42f2914abd83c5cb58bfe18b3585bf9fb4a0ed9c))
* **source:** add dummy fallback contact info for error page ([7103c11](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7103c1147caac797e0d04644a19d8cbeb4080bc6))
* **source:** add source and profile schema with validation logic ([00df96c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00df96c0106a9bcb8e88ba6399a97ffcc0f9b737))
* **theme:** add theme context, provider, and hook with system and localStorage support ([d14d6fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d14d6fa6c02c63ab97fb07c0767826967190208b))
* **theme:** add ThemeSelector component with system theme support ([c81fae5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c81fae52e93f91b7871f80bad37f5d5671c2f7d4))
* **ui:** add Dropdown component ([e78c2bf](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/e78c2bfe4a1b0cb23d81f8f09720680c02ecd162))
* **ui:** add Tooltip component ([7b2ca89](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b2ca899841f81be5946dc97da9633c608c75ec2))

### Bug Fixes

* **ci:** disable husky hooks in semantic-release step ([d778743](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d7787435aa8c7f8462635c3f3e06938fa1a0e9f0))
* **config:** ignore CHANGELOG.md in Prettier checks ([ce27557](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ce27557bd480691a5d9e613a9843c43083447431))
* correct import casing for validate module ([5714256](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5714256872ba7704a38d3cf94d4df728ae1b507c))
* **docker:** ensure scripts and husky copied before npm install ([7b405dc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b405dc4972833a561822905dc5922eafe378e2e))
* **eslint:** remove formatting rules that conflict with Prettier ([3d3a60b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d3a60b8aa9a4a6d960c48e88b9c9ac9eec15dba))
* **hooks:** only check new commits for GPG signatures ([0d0dc63](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0d0dc63817553212fe617760bcd6a874de4e6dad))
* **hooks:** run npm verify on pre-push for CI consistency ([0e38c13](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0e38c130c168d52c5173fa684645104270d82c9a))
* **hooks:** whitelist bots for CI pushes to protected branches ([999bead](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/999bead3fff4d41b3be78e7ba4f8535e0af3023e))
* **imports:** correct Dropdown path case sensitivity ([f930ea9](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f930ea9146a4628f531d278bbe647c6a776d0509))
* improve commit-signing check to support gitsign and GPG signatures ([f181b43](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f181b4304f7aeca1aec2d5a562e36052c990fb92))
* **source:** replace top-level await with async loader function ([4fa772b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fa772b77d788749e83440c7de22c9e142d90a22))
* **theme:** improve contrast for dark and verdant themes ([6101366](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/61013667af852859c961e121e65a24a0a9af1b30))
* update badge links and correct file paths in README.md ([b3c4568](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b3c4568f8f14b863f0b3b18a6fca0cdf8707e607))

### Refactoring

* **app:** integrate Layout and ErrorPage components ([ce62e6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ce62e6c90239c2070843cbfdd62bb06614923d3f))
* **app:** use AppStateContext for state management ([154628c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/154628c4b833d51d27bdd57341eb24ca366dd125))
* **config:** remove source schema from config ([c952931](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c9529312d0c405dad20577e3b5b570edbef8c86f))
* **config:** remove unused theme colors from config.json and schema ([a21c990](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a21c9907170e09ad319347d80385a3e65bc17c0c))
* **error-page:** rename source prop to envConfig ([170da4e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/170da4ef49e76c22bbb2146849107f1bbe2b68b2))
* **hooks:** migrate remaining hook scripts to shared utils ([be1136a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/be1136ab231c73edecad2f5737eb1c7c282a40d0))
* **icons:** consolidate icons with factory pattern ([8fc82a5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/8fc82a54d88d406c5864eccab22ece60cd7aa47c))
* improve logging messages and enhance secret scanning script ([a1a30e0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a1a30e07948319d3b461ca257a1e62211d03cafb))
* remove source.json and related validation ([a951c0c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a951c0ce148140d5cb36a7745aae307fa6019ef0))
* remove unused ESLint rule and clean up Vite config comments ([10e284c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/10e284c11f170483669f53e91a62b522900b80e6))
* replace static favicon with dynamic placeholder ([23df3a6](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/23df3a6daf5b029dda1fb5f97950a3b7cfaabed9))
* **schema:** change phone field to object with countryCode and number ([cec3ab2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cec3ab2f7cdfc745f9dec6df5e668dd516dbd2f1))
* **scripts:** extract common logging + color logic into utils.sh ([b53429e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b53429ebd508c6c219189182de888ceafd4cfe53))
* simplify App component and enhance theme integration ([fbfd01a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/fbfd01a3fc547763fe3cd02e66090ef9413439a9))
* update theme configuration to include 'verdant' and remove unused color definitions ([19aa07d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/19aa07d10f7f6b40062833234382065d0b930089))
* **validate:** extract phone builder to fix linter conflict ([c255fee](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c255fee56a0965935085d9c9b136add8f7bb12fe))
* **validate:** revert to inline ternary for phone object ([3eb057f](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3eb057f87a5f87f7027501d6ab066fb2a2457f2e))

## [1.0.0-beta.2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2026-02-07)

### Features

* **ci:** add environment secrets for DDP config ([ff654eb](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ff654eb4e0ff66b339176b797b7263b348ef7b98))

## 1.0.0-beta.1 (2026-02-07)

### Features

* **assets:** add static favicon.svg and update index.html reference ([4aec1fd](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4aec1fdd43c253e2e246fd887dc765790e2c2064))
* **ci:** add branch protection and PR gate for main ([4fab2d4](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fab2d40eeeefce84c60d4a25620a694e61b9419))
* **ci:** add semantic-release for automated versioning ([2ae5d02](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/2ae5d02df7b40651033b9bd37fe4cf0edd9c9cfd))
* **ci:** use RELEASE_TOKEN for bot commits and add verify to PR gate ([aee2642](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/aee2642d5c618fac8b541bd995ff5f48ec0d42db))
* **config:** add centralized project config with schema validation ([db98d34](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/db98d342ff18e12c6dfea9420817880fd4f64524))
* **context:** add app state schemas and validation ([ca67615](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ca67615f193bb22815b603fbaf65925e56888d28))
* **context:** add AppStateContext and provider with validation ([a6f4147](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a6f4147962f2131eeb46be45e6ae483a66c8467d))
* display app version in footer and console ([76e0afc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76e0afc50daf7e709e355c8bff8dc78e76721a4e))
* **hooks:** add useAppState hook for context access ([9117be8](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9117be863d67c59a84a42a2dc36751d03364782d))
* **hooks:** add useDynamicFavicon hook ([f6fe209](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f6fe2093f925954d578ecc988e6a706194c88015))
* **icons:** add cloudOff, envelope, and phone icons ([cc4897d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cc4897dcb336482e4bebf82dff9977b94e30ad1f))
* **icons:** add FaviconIcon component and remove unused assets ([a817675](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a81767586b4dda13633647b292945f72722fb901))
* **layout:** add copyright footer from app state ([3d7e6cc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d7e6cc865d7ba4ee9d477634317bfb425f3a99b))
* **layout:** add Layout component with ThemeSelector and dynamic favicon ([52ef549](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/52ef54993bf938c1185f0549e49c29bff9c61fa4))
* **lint:** enforce strict naming conventions for variables, functions, constants, and classes ([ffb91fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ffb91fa568cf47aca42af3d046e0f01827abe0bf))
* **logger:** add timestamp formatting utility and enhance log formatting ([ee01f46](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ee01f460387aa0da7395f19bf567a2a173f837e6))
* **logging:** add centralized logger with env-based levels and timestamped output ([bfec49c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/bfec49c9cb8f470234b94db899c9105dda09d632))
* **logging:** add debug logs to ThemeProvider, Layout, and ErrorPage ([b118f6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b118f6ccfd13b421cb3406730c5da5901e199a27))
* **pages:** add ErrorPage with fallback contact info display ([74e8a86](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/74e8a86fee2577fc9ea9b877d0f2d236ce914021))
* scaffold Vite + React app structure ([42f2914](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/42f2914abd83c5cb58bfe18b3585bf9fb4a0ed9c))
* **source:** add dummy fallback contact info for error page ([7103c11](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7103c1147caac797e0d04644a19d8cbeb4080bc6))
* **source:** add source and profile schema with validation logic ([00df96c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00df96c0106a9bcb8e88ba6399a97ffcc0f9b737))
* **theme:** add theme context, provider, and hook with system and localStorage support ([d14d6fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d14d6fa6c02c63ab97fb07c0767826967190208b))
* **theme:** add ThemeSelector component with system theme support ([c81fae5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c81fae52e93f91b7871f80bad37f5d5671c2f7d4))
* **ui:** add Dropdown component ([e78c2bf](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/e78c2bfe4a1b0cb23d81f8f09720680c02ecd162))
* **ui:** add Tooltip component ([7b2ca89](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b2ca899841f81be5946dc97da9633c608c75ec2))

### Bug Fixes

* **ci:** disable husky hooks in semantic-release step ([76b8934](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76b89344ad14dc173a573656121878ca42caea43))
* **config:** ignore CHANGELOG.md in Prettier checks ([c2ddb25](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c2ddb256301adcf4a15abaeb950f1fee2d186f25))
* correct import casing for validate module ([5714256](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5714256872ba7704a38d3cf94d4df728ae1b507c))
* **docker:** ensure scripts and husky copied before npm install ([7b405dc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b405dc4972833a561822905dc5922eafe378e2e))
* **eslint:** remove formatting rules that conflict with Prettier ([3d3a60b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d3a60b8aa9a4a6d960c48e88b9c9ac9eec15dba))
* **hooks:** only check new commits for GPG signatures ([0d0dc63](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0d0dc63817553212fe617760bcd6a874de4e6dad))
* **hooks:** run npm verify on pre-push for CI consistency ([0e38c13](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0e38c130c168d52c5173fa684645104270d82c9a))
* **hooks:** whitelist bots for CI pushes to protected branches ([999bead](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/999bead3fff4d41b3be78e7ba4f8535e0af3023e))
* **imports:** correct Dropdown path case sensitivity ([f930ea9](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f930ea9146a4628f531d278bbe647c6a776d0509))
* improve commit-signing check to support gitsign and GPG signatures ([f181b43](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f181b4304f7aeca1aec2d5a562e36052c990fb92))
* **source:** replace top-level await with async loader function ([4fa772b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fa772b77d788749e83440c7de22c9e142d90a22))
* **theme:** improve contrast for dark and verdant themes ([6101366](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/61013667af852859c961e121e65a24a0a9af1b30))
* update badge links and correct file paths in README.md ([b3c4568](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b3c4568f8f14b863f0b3b18a6fca0cdf8707e607))

### Refactoring

* **app:** integrate Layout and ErrorPage components ([ce62e6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ce62e6c90239c2070843cbfdd62bb06614923d3f))
* **app:** use AppStateContext for state management ([154628c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/154628c4b833d51d27bdd57341eb24ca366dd125))
* **config:** remove source schema from config ([c952931](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c9529312d0c405dad20577e3b5b570edbef8c86f))
* **config:** remove unused theme colors from config.json and schema ([a21c990](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a21c9907170e09ad319347d80385a3e65bc17c0c))
* **error-page:** rename source prop to envConfig ([170da4e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/170da4ef49e76c22bbb2146849107f1bbe2b68b2))
* **hooks:** migrate remaining hook scripts to shared utils ([be1136a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/be1136ab231c73edecad2f5737eb1c7c282a40d0))
* **icons:** consolidate icons with factory pattern ([8fc82a5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/8fc82a54d88d406c5864eccab22ece60cd7aa47c))
* improve logging messages and enhance secret scanning script ([a1a30e0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a1a30e07948319d3b461ca257a1e62211d03cafb))
* remove source.json and related validation ([a951c0c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a951c0ce148140d5cb36a7745aae307fa6019ef0))
* remove unused ESLint rule and clean up Vite config comments ([10e284c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/10e284c11f170483669f53e91a62b522900b80e6))
* replace static favicon with dynamic placeholder ([23df3a6](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/23df3a6daf5b029dda1fb5f97950a3b7cfaabed9))
* **schema:** change phone field to object with countryCode and number ([cec3ab2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cec3ab2f7cdfc745f9dec6df5e668dd516dbd2f1))
* **scripts:** extract common logging + color logic into utils.sh ([b53429e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b53429ebd508c6c219189182de888ceafd4cfe53))
* simplify App component and enhance theme integration ([fbfd01a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/fbfd01a3fc547763fe3cd02e66090ef9413439a9))
* update theme configuration to include 'verdant' and remove unused color definitions ([19aa07d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/19aa07d10f7f6b40062833234382065d0b930089))
* **validate:** extract phone builder to fix linter conflict ([c255fee](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c255fee56a0965935085d9c9b136add8f7bb12fe))
* **validate:** revert to inline ternary for phone object ([3eb057f](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3eb057f87a5f87f7027501d6ab066fb2a2457f2e))

## 1.0.0-beta.1 (2026-02-07)

### Features

* **assets:** add static favicon.svg and update index.html reference ([4aec1fd](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4aec1fdd43c253e2e246fd887dc765790e2c2064))
* **ci:** add branch protection and PR gate for main ([4fab2d4](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fab2d40eeeefce84c60d4a25620a694e61b9419))
* **ci:** add semantic-release for automated versioning ([2ae5d02](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/2ae5d02df7b40651033b9bd37fe4cf0edd9c9cfd))
* **ci:** use RELEASE_TOKEN for bot commits and add verify to PR gate ([aee2642](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/aee2642d5c618fac8b541bd995ff5f48ec0d42db))
* **config:** add centralized project config with schema validation ([db98d34](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/db98d342ff18e12c6dfea9420817880fd4f64524))
* **context:** add app state schemas and validation ([ca67615](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ca67615f193bb22815b603fbaf65925e56888d28))
* **context:** add AppStateContext and provider with validation ([a6f4147](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a6f4147962f2131eeb46be45e6ae483a66c8467d))
* display app version in footer and console ([76e0afc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76e0afc50daf7e709e355c8bff8dc78e76721a4e))
* **hooks:** add useAppState hook for context access ([9117be8](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/9117be863d67c59a84a42a2dc36751d03364782d))
* **hooks:** add useDynamicFavicon hook ([f6fe209](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f6fe2093f925954d578ecc988e6a706194c88015))
* **icons:** add cloudOff, envelope, and phone icons ([cc4897d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cc4897dcb336482e4bebf82dff9977b94e30ad1f))
* **icons:** add FaviconIcon component and remove unused assets ([a817675](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a81767586b4dda13633647b292945f72722fb901))
* **layout:** add copyright footer from app state ([3d7e6cc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d7e6cc865d7ba4ee9d477634317bfb425f3a99b))
* **layout:** add Layout component with ThemeSelector and dynamic favicon ([52ef549](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/52ef54993bf938c1185f0549e49c29bff9c61fa4))
* **lint:** enforce strict naming conventions for variables, functions, constants, and classes ([ffb91fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ffb91fa568cf47aca42af3d046e0f01827abe0bf))
* **logger:** add timestamp formatting utility and enhance log formatting ([ee01f46](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ee01f460387aa0da7395f19bf567a2a173f837e6))
* **logging:** add centralized logger with env-based levels and timestamped output ([bfec49c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/bfec49c9cb8f470234b94db899c9105dda09d632))
* **logging:** add debug logs to ThemeProvider, Layout, and ErrorPage ([b118f6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b118f6ccfd13b421cb3406730c5da5901e199a27))
* **pages:** add ErrorPage with fallback contact info display ([74e8a86](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/74e8a86fee2577fc9ea9b877d0f2d236ce914021))
* scaffold Vite + React app structure ([42f2914](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/42f2914abd83c5cb58bfe18b3585bf9fb4a0ed9c))
* **source:** add dummy fallback contact info for error page ([7103c11](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7103c1147caac797e0d04644a19d8cbeb4080bc6))
* **source:** add source and profile schema with validation logic ([00df96c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/00df96c0106a9bcb8e88ba6399a97ffcc0f9b737))
* **theme:** add theme context, provider, and hook with system and localStorage support ([d14d6fa](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/d14d6fa6c02c63ab97fb07c0767826967190208b))
* **theme:** add ThemeSelector component with system theme support ([c81fae5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c81fae52e93f91b7871f80bad37f5d5671c2f7d4))
* **ui:** add Dropdown component ([e78c2bf](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/e78c2bfe4a1b0cb23d81f8f09720680c02ecd162))
* **ui:** add Tooltip component ([7b2ca89](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b2ca899841f81be5946dc97da9633c608c75ec2))

### Bug Fixes

* **ci:** disable husky hooks in semantic-release step ([76b8934](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/76b89344ad14dc173a573656121878ca42caea43))
* correct import casing for validate module ([5714256](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/5714256872ba7704a38d3cf94d4df728ae1b507c))
* **docker:** ensure scripts and husky copied before npm install ([7b405dc](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/7b405dc4972833a561822905dc5922eafe378e2e))
* **eslint:** remove formatting rules that conflict with Prettier ([3d3a60b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3d3a60b8aa9a4a6d960c48e88b9c9ac9eec15dba))
* **hooks:** only check new commits for GPG signatures ([0d0dc63](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0d0dc63817553212fe617760bcd6a874de4e6dad))
* **hooks:** run npm verify on pre-push for CI consistency ([0e38c13](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/0e38c130c168d52c5173fa684645104270d82c9a))
* **hooks:** whitelist bots for CI pushes to protected branches ([999bead](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/999bead3fff4d41b3be78e7ba4f8535e0af3023e))
* **imports:** correct Dropdown path case sensitivity ([f930ea9](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f930ea9146a4628f531d278bbe647c6a776d0509))
* improve commit-signing check to support gitsign and GPG signatures ([f181b43](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/f181b4304f7aeca1aec2d5a562e36052c990fb92))
* **source:** replace top-level await with async loader function ([4fa772b](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/4fa772b77d788749e83440c7de22c9e142d90a22))
* **theme:** improve contrast for dark and verdant themes ([6101366](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/61013667af852859c961e121e65a24a0a9af1b30))
* update badge links and correct file paths in README.md ([b3c4568](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b3c4568f8f14b863f0b3b18a6fca0cdf8707e607))

### Refactoring

* **app:** integrate Layout and ErrorPage components ([ce62e6c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/ce62e6c90239c2070843cbfdd62bb06614923d3f))
* **app:** use AppStateContext for state management ([154628c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/154628c4b833d51d27bdd57341eb24ca366dd125))
* **config:** remove source schema from config ([c952931](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c9529312d0c405dad20577e3b5b570edbef8c86f))
* **config:** remove unused theme colors from config.json and schema ([a21c990](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a21c9907170e09ad319347d80385a3e65bc17c0c))
* **error-page:** rename source prop to envConfig ([170da4e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/170da4ef49e76c22bbb2146849107f1bbe2b68b2))
* **hooks:** migrate remaining hook scripts to shared utils ([be1136a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/be1136ab231c73edecad2f5737eb1c7c282a40d0))
* **icons:** consolidate icons with factory pattern ([8fc82a5](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/8fc82a54d88d406c5864eccab22ece60cd7aa47c))
* improve logging messages and enhance secret scanning script ([a1a30e0](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a1a30e07948319d3b461ca257a1e62211d03cafb))
* remove source.json and related validation ([a951c0c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/a951c0ce148140d5cb36a7745aae307fa6019ef0))
* remove unused ESLint rule and clean up Vite config comments ([10e284c](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/10e284c11f170483669f53e91a62b522900b80e6))
* replace static favicon with dynamic placeholder ([23df3a6](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/23df3a6daf5b029dda1fb5f97950a3b7cfaabed9))
* **schema:** change phone field to object with countryCode and number ([cec3ab2](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/cec3ab2f7cdfc745f9dec6df5e668dd516dbd2f1))
* **scripts:** extract common logging + color logic into utils.sh ([b53429e](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/b53429ebd508c6c219189182de888ceafd4cfe53))
* simplify App component and enhance theme integration ([fbfd01a](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/fbfd01a3fc547763fe3cd02e66090ef9413439a9))
* update theme configuration to include 'verdant' and remove unused color definitions ([19aa07d](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/19aa07d10f7f6b40062833234382065d0b930089))
* **validate:** extract phone builder to fix linter conflict ([c255fee](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/c255fee56a0965935085d9c9b136add8f7bb12fe))
* **validate:** revert to inline ternary for phone object ([3eb057f](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/commit/3eb057f87a5f87f7027501d6ab066fb2a2457f2e))
