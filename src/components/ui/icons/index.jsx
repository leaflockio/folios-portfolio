// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import PropTypes from 'prop-types';

/**
 * Icon configuration with path data and styling options.
 */
const ICONS = {
  arrowLeft: {
    path: 'M20 12H4M11 17l-5-5 5-5',
  },
  arrowUp: {
    path: 'M12 19V5M5 12l7-7 7 7',
  },
  award: {
    path: 'M8.21 13.89L7 23l5-3 5 3-1.21-9.12M12 2a5 5 0 100 10 5 5 0 000-10z',
  },
  bitbucket: {
    fill: true,
    path: 'M.778 1.213a.768.768 0 0 0-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 0 0 .77-.646l3.27-20.03a.768.768 0 0 0-.768-.891H.778zm14.52 14.193H8.95l-1.562-8.31h9.024l-1.114 8.31z',
  },
  bookOpen: {
    path: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z',
  },
  briefcase: {
    path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
  },
  building: {
    path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 7h1M9 11h1M14 7h1M14 11h1M9 15h6v6H9v-6z',
  },
  chatBot: {
    path: `
      M6.5 6H17.5a4 4 0 014 4V13a4 4 0 01-4 4H10L5 22L2.5 17V10a4 4 0 014-4z
      M12 6V3
      M12.5 2a.5.5 0 11-1 0 .5.5 0 011 0z
      M7.75 11.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z
      M12.75 11.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z
      M17.75 11.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z
      M1 9.5v4
      M23 9.5v4
    `.trim(),
  },
  check: {
    path: 'M5 13l4 4L19 7',
    strokeWidth: 2.5,
  },
  chevronDown: {
    path: 'M6 9l6 6 6-6',
  },
  chevronLeft: {
    path: 'M15 18l-6-6 6-6',
  },
  chevronRight: {
    path: 'M9 18l6-6-6-6',
  },
  chevronUp: {
    path: 'M18 15l-6-6-6 6',
  },
  cloudOff: {
    path: `
      M22.61 16.95A5 5 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3
      M1 1l22 22
    `.trim(),
  },
  code: {
    path: 'M18 16l4-4-4-4M6 8l-4 4 4 4M14 5l-4 14',
  },
  codepen: {
    fill: true,
    path: 'M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.06-.046-.04-.06-.045L12.58.254a.617.617 0 0 0-.58 0L.846 7.57l-.06.045-.048.04-.06.06-.045.046-.044.06-.03.05-.035.067-.02.05c-.012.025-.02.05-.03.075l-.017.05-.018.087v7.636l.018.087.017.05c.01.024.018.05.03.075.003.018.015.034.02.05l.035.067.03.05.044.06.046.045.06.06.046.04.06.045 11.154 7.316a.617.617 0 0 0 .58 0l11.154-7.316.06-.045.048-.04.06-.06.045-.046.044-.06.03-.05.035-.067.02-.05c.012-.025.02-.05.03-.075l.017-.05.018-.087V8.182zm-11.4 6.415L8.862 12 12.6 9.403l3.738 2.597-3.738 2.597zM12 7.89V2.89l5.628 3.69L12 9.891V7.89zm-1.2 0v2l-5.628 2.69L12 6.58v1.31zm-6.4 4.11L7.14 12l-2.74 1.9v-1.9zm6.4 4.11v5l-5.628-3.69L12 14.11v2zm1.2 0l5.628 2.69-5.628 3.69v-5l5.628-3.69zm6.4-2.21L17.86 12l2.74-1.9v3.8z',
  },
  codesandbox: {
    fill: true,
    path: 'M2 6l10-5 10 5v12l-10 5-10-5V6zm2 1.61v9.78l8 4V11.39l-8-4zM12 2.39L4.47 6 12 9.61 19.53 6 12 2.39zM14 21.39l8-4V7.61l-8 4v9.78z',
  },
  compass: {
    path: 'M12 2a10 10 0 100 20 10 10 0 000-20zM16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z',
  },
  cpu: {
    path: 'M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM9 9h6v6H9V9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2',
  },
  dribbble: {
    fill: true,
    path: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.29 10.29 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 006.29 2.166c1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zm7.56-7.872c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702a10.201 10.201 0 00-9.2-2.3zm9.978 3.39c-.21.29-1.895 2.49-5.682 4.035.24.49.47.985.68 1.485.07.18.14.36.205.54 3.517-.44 7.02.267 7.37.338-.024-2.41-.896-4.63-2.57-6.4z',
  },
  envelope: {
    path: `
      M3 8l7.89 5.26a2 2 0 002.22 0L21 8
      M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z
    `.trim(),
  },
  externalLink: {
    path: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3',
  },
  factory: {
    path: 'M2 21h20M4 21V12l5-4h6l5 4v9M17 12V5h3v7M8 15h2M8 18h2M13 15h2M13 18h2',
  },
  favicon: {
    fill: true,
    path: `
      M 0.5,4 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 12.5,4 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 24.5,4 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 0.5,16 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 12.5,16 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 24.5,16 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 0.5,28 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 12.5,28 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
      M 24.5,28 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0
    `.trim(),
    viewBox: '0 0 32 32',
  },
  folderCode: {
    path: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l3 3h8a2 2 0 012 2zM8.5 14.5l-1.5-1.5 1.5-1.5M15.5 11.5l1.5 1.5-1.5 1.5M13 10.5l-2 5',
  },
  folderOpen: {
    path: 'M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z',
  },
  github: {
    fill: true,
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  gitlab: {
    fill: true,
    path: 'm23.6 9.593-.033-.086L20.3.98a.851.851 0 0 0-.336-.405.87.87 0 0 0-1.002.07.86.86 0 0 0-.285.386l-2.2 6.73H7.525l-2.2-6.73a.85.85 0 0 0-.285-.386.87.87 0 0 0-1.002-.07.85.85 0 0 0-.336.406L.434 9.507l-.032.086a6.05 6.05 0 0 0 2.006 6.99l.012.009.03.022 4.962 3.717 2.454 1.858 1.494 1.13a1.01 1.01 0 0 0 1.22 0l1.494-1.13 2.454-1.858 4.992-3.74.014-.01a6.05 6.05 0 0 0 2.006-6.988Z',
  },
  globe: {
    path: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z',
  },
  home: {
    path: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10',
  },
  instagram: {
    fill: true,
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z',
  },
  landmark: {
    path: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h1M14 9h1',
  },
  layers: {
    path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  layout: {
    path: 'M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zM2 9h20M9 9v12',
  },
  lightbulb: {
    path: 'M9 21h6M12 3a6 6 0 00-3.54 10.85L9 14.5V18h6v-3.5l.54-.65A6 6 0 0012 3z',
  },
  linkedin: {
    fill: true,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  mapPin: {
    fill: true,
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z',
  },
  medal: {
    path: 'M12 4l1.76 3.57 3.94.57-2.85 2.78.67 3.93L12 13l-3.52 1.85.67-3.93L6.3 8.14l3.94-.57L12 4zM8 21l4-2 4 2',
  },
  medium: {
    fill: true,
    path: 'M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z',
  },
  office: {
    path: 'M3 21h18M9 21V3h12v18M3 21V10l6-3M7 13h1M7 17h1M13 7h1M13 11h1M13 15h1M17 7h1M17 11h1M17 15h1',
  },
  palette: {
    path: `
      M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z
      m0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343
      M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485
      M7 17h.01
    `.trim(),
  },
  phone: {
    path: `
      M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21
      l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502
      l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z
    `.trim(),
  },
  refresh: {
    path: `
      M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9
      m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15
    `.trim(),
  },

  rosette: {
    path: 'M12 2a7 7 0 100 14 7 7 0 000-14zM12 8l1.12 2.27 2.5.37-1.81 1.76.43 2.5L12 13.77l-2.24 1.18.43-2.5-1.81-1.76 2.5-.37L12 8zM9 16l-2 6 5-2.5L17 22l-2-6',
  },
  server: {
    path: 'M2 3h20v7H2V3zM2 14h20v7H2v-7zM6 6.5h.01M6 17.5h.01M18 6.5h.01M18 17.5h.01',
  },
  shield: {
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  sliders: {
    path: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
  },
  star: {
    path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  terminal: {
    path: 'M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zM7 15l4-4-4-4M13 15h4',
  },
  trophy: {
    path: 'M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 22v-4M14 22v-4M18 4H6v5a6 6 0 006 6 6 6 0 006-6V4z',
  },
  twitter: {
    fill: true,
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  warehouse: {
    path: 'M2 21h20M3 21V11l9-7 9 7v10M9 21v-5h6v5',
  },
  wrench: {
    path: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  },
  youtube: {
    fill: true,
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
};

/**
 * Factory function to create icon components.
 *
 * @param {object} config - Icon configuration
 * @param {string} config.path - SVG path data
 * @param {string} config.viewBox - SVG viewBox (default: '0 0 24 24')
 * @param {boolean} config.fill - Use fill instead of stroke (default: false)
 * @param {number} config.strokeWidth - Stroke width (default: 2)
 * @returns {Function} React component
 */
function createIcon(config) {
  const { fill = false, path, strokeWidth = 2, viewBox = '0 0 24 24' } = config;

  /**
   * Icon component.
   *
   * @param {object} props - Component props
   * @param {string} props.className - CSS classes for styling
   * @param {string} props.color - Direct color value (for static rendering)
   * @returns {JSX.Element} The rendered icon
   */
  function Icon({ className = '', color }) {
    return (
      <svg
        className={className}
        fill={fill ? color || 'currentColor' : 'none'}
        stroke={fill ? 'none' : color || 'currentColor'}
        strokeWidth={fill ? 0 : strokeWidth}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
  };

  return Icon;
}

// ── UI controls ──
export const ArrowLeftIcon = createIcon(ICONS.arrowLeft);
export const ArrowUpIcon = createIcon(ICONS.arrowUp);
export const ChatBotIcon = createIcon(ICONS.chatBot);
export const ChevronDownIcon = createIcon(ICONS.chevronDown);
export const ChevronLeftIcon = createIcon(ICONS.chevronLeft);
export const ChevronRightIcon = createIcon(ICONS.chevronRight);
export const ChevronUpIcon = createIcon(ICONS.chevronUp);

// ── Utility ──
export const CheckIcon = createIcon(ICONS.check);
export const CloudOffIcon = createIcon(ICONS.cloudOff);
export const EnvelopeIcon = createIcon(ICONS.envelope);
export const ExternalLinkIcon = createIcon(ICONS.externalLink);
export const FaviconIcon = createIcon(ICONS.favicon);
export const MapPinIcon = createIcon(ICONS.mapPin);
export const PaletteIcon = createIcon(ICONS.palette);
export const PhoneIcon = createIcon(ICONS.phone);
export const RefreshIcon = createIcon(ICONS.refresh);
export const CompassIcon = createIcon(ICONS.compass);

// ── Social media ──
export const DribbbleIcon = createIcon(ICONS.dribbble);
export const GitHubIcon = createIcon(ICONS.github);
export const InstagramIcon = createIcon(ICONS.instagram);
export const LinkedInIcon = createIcon(ICONS.linkedin);
export const MediumIcon = createIcon(ICONS.medium);
export const TwitterIcon = createIcon(ICONS.twitter);
export const YouTubeIcon = createIcon(ICONS.youtube);

// ── Code platforms ──
export const BitbucketIcon = createIcon(ICONS.bitbucket);
export const CodePenIcon = createIcon(ICONS.codepen);
export const CodeSandboxIcon = createIcon(ICONS.codesandbox);
export const GitLabIcon = createIcon(ICONS.gitlab);

// ── Section navigation ──
export const AwardIcon = createIcon(ICONS.award);
export const BookOpenIcon = createIcon(ICONS.bookOpen);
export const BriefcaseIcon = createIcon(ICONS.briefcase);
export const FolderCodeIcon = createIcon(ICONS.folderCode);
export const FolderOpenIcon = createIcon(ICONS.folderOpen);
export const GlobeIcon = createIcon(ICONS.globe);
export const HomeIcon = createIcon(ICONS.home);
export const LayersIcon = createIcon(ICONS.layers);

// ── Skills icon alternatives ──
export const CpuIcon = createIcon(ICONS.cpu);
export const SlidersIcon = createIcon(ICONS.sliders);
export const WrenchIcon = createIcon(ICONS.wrench);

// ── Fallback: organization pool ──
export const BuildingIcon = createIcon(ICONS.building);
export const FactoryIcon = createIcon(ICONS.factory);
export const LandmarkIcon = createIcon(ICONS.landmark);
export const OfficeIcon = createIcon(ICONS.office);
export const WarehouseIcon = createIcon(ICONS.warehouse);

// ── Fallback: project pool ──
export const CodeIcon = createIcon(ICONS.code);
export const LayoutIcon = createIcon(ICONS.layout);
export const LightbulbIcon = createIcon(ICONS.lightbulb);
export const ServerIcon = createIcon(ICONS.server);
export const TerminalIcon = createIcon(ICONS.terminal);

// ── Fallback: certification pool ──
export const MedalIcon = createIcon(ICONS.medal);
export const RosetteIcon = createIcon(ICONS.rosette);
export const ShieldIcon = createIcon(ICONS.shield);
export const StarIcon = createIcon(ICONS.star);
export const TrophyIcon = createIcon(ICONS.trophy);
