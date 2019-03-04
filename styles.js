(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/c/--projects--/ngx-toastit/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/mnt/c/--projects--/ngx-toastit/node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n\n/**\n   * Remove default margin.\n   */\n\nbody {\n    margin: 0;\n  }\n\n/* HTML5 display definitions\n     ========================================================================== */\n\n/**\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\n   * and Firefox.\n   * Correct `block` display not defined for `main` in IE 11.\n   */\n\narticle,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n\n/**\n   * 1. Correct `inline-block` display not defined in IE 8/9.\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n   */\n\naudio,\n  canvas,\n  progress,\n  video {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n  }\n\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n   */\n\n[hidden],\n  template {\n    display: none;\n  }\n\n/* Links\n     ========================================================================== */\n\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n  }\n\n/**\n   * Improve readability of focused elements when they are also in an\n   * active/hover state.\n   */\n\na:active,\n  a:hover {\n    outline: 0;\n  }\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n  }\n\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\n\nb,\n  strong {\n    font-weight: bold;\n  }\n\n/**\n   * Address styling not present in Safari and Chrome.\n   */\n\ndfn {\n    font-style: italic;\n  }\n\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n/**\n   * Address styling not present in IE 8/9.\n   */\n\nmark {\n    background: #ff0;\n    color: #000;\n  }\n\n/**\n   * Address inconsistent and variable font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n  }\n\n/**\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n   */\n\nsub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\nsup {\n    top: -0.5em;\n  }\n\nsub {\n    bottom: -0.25em;\n  }\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove border when inside `a` element in IE 8/9/10.\n   */\n\nimg {\n    border: 0;\n  }\n\n/**\n   * Correct overflow not hidden in IE 9/10/11.\n   */\n\nsvg:not(:root) {\n    overflow: hidden;\n  }\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * Address margin not present in IE 8/9 and Safari.\n   */\n\nfigure {\n    margin: 1em 40px;\n  }\n\n/**\n   * Address differences between Firefox and other browsers.\n   */\n\nhr {\n    box-sizing: content-box;\n    height: 0;\n  }\n\n/**\n   * Contain overflow in all browsers.\n   */\n\npre {\n    overflow: auto;\n  }\n\n/**\n   * Address odd `em`-unit font size rendering in all browsers.\n   */\n\ncode,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\n   * styling of `select`, unless a `border` property is set.\n   */\n\n/**\n   * 1. Correct color not being inherited.\n   *    Known issue: affects color of disabled elements.\n   * 2. Correct font properties not being inherited.\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n   */\n\nbutton,\n  input,\n  optgroup,\n  select,\n  textarea {\n    color: inherit; /* 1 */\n    font: inherit; /* 2 */\n    margin: 0; /* 3 */\n  }\n\n/**\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\n   */\n\nbutton {\n    overflow: visible;\n  }\n\n/**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n   * Correct `select` style inheritance in Firefox.\n   */\n\nbutton,\n  select {\n    text-transform: none;\n  }\n\n/**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   */\n\nbutton,\n  html input[type=\"button\"], /* 1 */\n  input[type=\"reset\"],\n  input[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n  }\n\n/**\n   * Re-set default cursor for disabled elements.\n   */\n\nbutton[disabled],\n  html input[disabled] {\n    cursor: default;\n  }\n\n/**\n   * Remove inner padding and border in Firefox 4+.\n   */\n\nbutton::-moz-focus-inner,\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n/**\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\n\ninput {\n    line-height: normal;\n  }\n\n/**\n   * It's recommended that you don't attempt to style these elements.\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\n   *\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\n   * 2. Remove excess padding in IE 8/9/10.\n   */\n\ninput[type=\"checkbox\"],\n  input[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n/**\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n   * `font-size` values of the `input`, it causes the cursor style of the\n   * decrement button to change from `default` to `text`.\n   */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\n  input[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n/**\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n   */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    box-sizing: content-box; /* 2 */\n  }\n\n/**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and `textfield` appearance).\n   */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\n  input[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n/**\n   * Define consistent border, margin, and padding.\n   */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n\n/**\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n   */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n/**\n   * Remove default vertical scrollbar in IE 8/9/10/11.\n   */\n\ntextarea {\n    overflow: auto;\n  }\n\n/**\n   * Don't inherit the `font-weight` (applied by a rule above).\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n   */\n\noptgroup {\n    font-weight: bold;\n  }\n\n/* Tables\n     ========================================================================== */\n\n/**\n   * Remove most spacing between table cells.\n   */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\ntd,\n  th {\n    padding: 0;\n  }\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\nhtml {\n    font-size: 1em;\n    line-height: 1.4;\n}\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n    vertical-align: middle;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n\n*,\n*:after,\n*:before { \n-webkit-tap-highlight-color: rgba(0, 0, 0, 0); \nbox-sizing: border-box; }\n\nhtml {font-family: 'Open Sans', sans-serif;background: #303144;color: #fff;font-weight: 600;}\n\n.row {margin: 0 -20px 30px -20px;}\n\n.row:before,\n.row:after { display: table; clear: both; content:\"\"; }\n\n.row > *[class *= \"col-\"] { position:relative; float:left; padding: 0 20px; }\n\n.col-1-2 { width: 50%; }\n\n.group {margin-bottom: 14px;}\n\n.wrap { width:100%; max-width: 1040px;margin: 0 auto;padding: 50px 20px; }\n\nh1 { font-weight: 600; text-align: center; margin: 0; }\n\nh2 { font-weight: 300; text-align: center; margin: 0;color: #9798a1;}\n\n.credits { text-align: center; color: #9798a1; margin-top: 10px;font-size: 12px; }\n\n.credits a { color: #00c4b9; text-decoration: none; }\n\n.badges{margin: 20px 0 40px 0;display: flex;align-items: center;justify-content: center;}\n\n.badges > span{display: inline-block;margin-top: 7px;margin-right:20px;}\n\n::-webkit-input-placeholder { color: #9798a1; }\n\n::-moz-placeholder { color: #9798a1; }\n\n:-ms-input-placeholder {  color: #9798a1; }\n\n:-moz-placeholder { color: #9798a1; }\n\nlabel {display: block;text-transform: uppercase;font-size: 13px;letter-spacing: 1px;margin-bottom: 7px; }\n\n.radio {font-weight: 300;text-transform: none;margin-bottom: 5px !important;color: #9798a1;font-size: 14px;}\n\n.radio:last-child{margin-bottom: 0 !important;}\n\n.radio input[type=\"radio\"] {float: left;width: auto;margin-right: 10px;margin-top: 3px; }\n\ninput,\ntextarea {font-family: 'Open Sans', sans-serif;display: block;width: 100%;background: #292a3c;border: none;padding: 13px 20px;border-radius: 5px;font-weight: 300; font-size: 14px;letter-spacing: 1px; transition: background .2s}\n\ntextarea { min-height: 73px}\n\ninput:focus,\ntextarea:focus { background: #242638; }\n\ninput:focus,\ntextarea:focus,\nbutton:focus { outline: none; }\n\nbutton {font-family: 'Open Sans', sans-serif;padding: 12px 0;font-weight: 600;color: #fff;text-transform: uppercase;    margin-left: 4px;background: #ff5942;border: none;border-radius: 5px;font-size: 13px;letter-spacing: 1px;width: 157px;transition: background .2s}\n\nbutton:hover { background: #cc4734 }\n\n.show {background: #00c4b9;}\n\n.show:hover {background:#019e96;}\n\n.spec {background: #292a3d; border-radius: 5px; padding: 25px 20px;}\n\n.spec:before,\n.spec:after { clear: both; display: table; content: '';}\n\n.spec .group { width: 50%;float: left; margin: 0; }\n\n.spec .group label{margin-bottom: 11px;}\n\n.buttons { text-align: right; }\n\n.options-wrap {  margin-top: 50px;}\n\n.options { background: #292a3e; padding: 20px; border-radius: 5px }\n\npre { font-family: 'Roboto Mono', monospace; font-size: 13px; color: #9798a1;white-space: initial;}\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n.hidden { display: none !important; }\n\n/* ==========================================================================\n   Media Queries\n   ========================================================================== */\n\n@media only screen and (max-width: 740px) {\n    .row { margin: 0;}\n    .row > *[class *= \"col-\"] {  float:none; padding: 0; }\n    .col-1-2 { width: 100%; }\n    .buttons { margin-top: 20px; }\n    button { display: block; margin-top: 10px; }\n}\n\n.toastit__icon--pin::after {\n    margin-top: -3px;\n    margin-left: 1px;\n    display: block;\n    font-size: 20px !important;\n}\n\n.toastit__icon--success::after {\n    margin-top: -3px;\n    margin-left: 1px;\n    display: block;\n    font-size: 20px !important;\n}\n\n.toastit__icon--info::after {\n    margin-top: -3px;\n    margin-left: 1px;\n    display: block;\n    font-size: 20px !important;\n}\n\n.toastit__icon--warning::after {\n    margin-top: -2px;\n    margin-left: 1px;\n    display: block;\n    font-size: 20px !important;\n}\n\n.toastit__icon--progress::after {\n    margin-top: -3px;\n    margin-left: 1px;\n    display: block;\n    font-size: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3RvYXN0aXQtdGVzdGVyL3NyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7Ozs7RUFJRTs7QUFFRDtJQUNHLHVCQUF1QixFQUFFLE1BQU07SUFDL0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyw4QkFBOEIsRUFBRSxNQUFNO0VBQ3hDOztBQUVBOztJQUVFOztBQUVGO0lBQ0UsU0FBUztFQUNYOztBQUVBO2lGQUMrRTs7QUFFL0U7Ozs7O0lBS0U7O0FBRUY7Ozs7Ozs7Ozs7Ozs7SUFhRSxjQUFjO0VBQ2hCOztBQUVBOzs7SUFHRTs7QUFFRjs7OztJQUlFLHFCQUFxQixFQUFFLE1BQU07SUFDN0Isd0JBQXdCLEVBQUUsTUFBTTtFQUNsQzs7QUFFQTs7O0lBR0U7O0FBRUY7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztBQUVBOzs7SUFHRTs7QUFFRjs7SUFFRSxhQUFhO0VBQ2Y7O0FBRUE7aUZBQytFOztBQUUvRTs7SUFFRTs7QUFFRjtJQUNFLDZCQUE2QjtFQUMvQjs7QUFFQTs7O0lBR0U7O0FBRUY7O0lBRUUsVUFBVTtFQUNaOztBQUVBO2lGQUMrRTs7QUFFL0U7O0lBRUU7O0FBRUY7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7O0lBRUU7O0FBRUY7O0lBRUUsaUJBQWlCO0VBQ25COztBQUVBOztJQUVFOztBQUVGO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBOzs7SUFHRTs7QUFFRjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUE7O0lBRUU7O0FBRUY7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVBOztJQUVFOztBQUVGO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTs7SUFFRTs7QUFFRjs7SUFFRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO2lG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RUFBRSxrQkFBa0IsQ0FBQzs7QUFDbkU7Y0FDYyxXQUFXLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQzs7QUFDdkQsZUFBZSxVQUFVLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRTs7QUFDbEQsbUJBQW1CLG1CQUFtQixDQUFDOztBQUN2QyxXQUFXLGlCQUFpQixFQUFFOztBQUM5QixpQkFBaUIsZ0JBQWdCLENBQUM7O0FBQ2xDLFdBQVcsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLG1CQUFtQjs7QUFDbEUsTUFBTSxxQ0FBcUMsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLG9CQUFvQixDQUFDOztBQUVsRzs7K0VBRStFOztBQUMvRSxVQUFVLHdCQUF3QixFQUFFOztBQUVwQzs7K0VBRStFOztBQUMvRTtJQUNJLE9BQU8sU0FBUyxDQUFDO0lBQ2pCLDZCQUE2QixVQUFVLEVBQUUsVUFBVSxFQUFFO0lBQ3JELFdBQVcsV0FBVyxFQUFFO0lBQ3hCLFdBQVcsZ0JBQWdCLEVBQUU7SUFDN0IsU0FBUyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUU7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUIiLCJmaWxlIjoicHJvamVjdHMvdG9hc3RpdC10ZXN0ZXIvc3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjMgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qKlxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cbiAqIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXG4gKiAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXG4gKi9cblxuIGh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cbiAgICovXG4gIFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxuICAgKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxuICAgKiBhbmQgRmlyZWZveC5cbiAgICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cbiAgICovXG4gIFxuICBhcnRpY2xlLFxuICBhc2lkZSxcbiAgZGV0YWlscyxcbiAgZmlnY2FwdGlvbixcbiAgZmlndXJlLFxuICBmb290ZXIsXG4gIGhlYWRlcixcbiAgaGdyb3VwLFxuICBtYWluLFxuICBtZW51LFxuICBuYXYsXG4gIHNlY3Rpb24sXG4gIHN1bW1hcnkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cbiAgICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICAgKi9cbiAgXG4gIGF1ZGlvLFxuICBjYW52YXMsXG4gIHByb2dyZXNzLFxuICB2aWRlbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuICAgKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICAgKi9cbiAgXG4gIGF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXG4gICAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cbiAgICovXG4gIFxuICBbaGlkZGVuXSxcbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIExpbmtzXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIGZvY3VzZWQgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBhbHNvIGluIGFuXG4gICAqIGFjdGl2ZS9ob3ZlciBzdGF0ZS5cbiAgICovXG4gIFxuICBhOmFjdGl2ZSxcbiAgYTpob3ZlciB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICBcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gICAqL1xuICBcbiAgYWJiclt0aXRsZV0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gICAqL1xuICBcbiAgYixcbiAgc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbiAgICovXG4gIFxuICBkZm4ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBcbiAgLyoqXG4gICAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcbiAgICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuICAgKi9cbiAgXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbiAgICovXG4gIFxuICBtYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG4gIFxuICAvKipcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIHN1YixcbiAgc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIFxuICBzdXAge1xuICAgIHRvcDogLTAuNWVtO1xuICB9XG4gIFxuICBzdWIge1xuICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgfVxuICBcbiAgLyogRW1iZWRkZWQgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBcbiAgLyoqXG4gICAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxuICAgKi9cbiAgXG4gIGltZyB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIFxuICAvKipcbiAgICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG4gICAqL1xuICBcbiAgc3ZnOm5vdCg6cm9vdCkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cbiAgICovXG4gIFxuICBmaWd1cmUge1xuICAgIG1hcmdpbjogMWVtIDQwcHg7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgaHIge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIHByZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgY29kZSxcbiAga2JkLFxuICBwcmUsXG4gIHNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICBcbiAgLyogRm9ybXNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxuICAgKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXG4gICAqL1xuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbiAgICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXG4gICAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4gICAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuICAgKi9cbiAgXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIG9wdGdyb3VwLFxuICBzZWxlY3QsXG4gIHRleHRhcmVhIHtcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbiAgICBtYXJnaW46IDA7IC8qIDMgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxuICAgKi9cbiAgXG4gIGJ1dHRvbiB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4gICAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXG4gICAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXG4gICAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cbiAgICovXG4gIFxuICBidXR0b24sXG4gIHNlbGVjdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuICAgKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbiAgICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuICAgKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuICAgKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4gICAqL1xuICBcbiAgYnV0dG9uLFxuICBodG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8qIDEgKi9cbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xuICB9XG4gIFxuICAvKipcbiAgICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAgICovXG4gIFxuICBidXR0b25bZGlzYWJsZWRdLFxuICBodG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuICAgKi9cbiAgXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbiAgaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxuICAgKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAgICovXG4gIFxuICBpbnB1dCB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cbiAgICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbiAgICpcbiAgICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cbiAgICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbiAgICovXG4gIFxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXG4gICAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXG4gICAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbiAgICovXG4gIFxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbiAgICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbiAgICovXG4gIFxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cbiAgICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuICAgKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXG4gICAqL1xuICBcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG4gIFxuICAvKipcbiAgICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuICAgKi9cbiAgXG4gIGZpZWxkc2V0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgIG1hcmdpbjogMCAycHg7XG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxuICAgKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXG4gICAqL1xuICBcbiAgbGVnZW5kIHtcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxuICAgKi9cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgLyoqXG4gICAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cbiAgICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXG4gICAqL1xuICBcbiAgb3B0Z3JvdXAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAvKiBUYWJsZXNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4gICAqL1xuICBcbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgXG4gIHRkLFxuICB0aCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJhc2VcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICBodG1sIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuOjotbW96LXNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5hdWRpbyxcbmNhbnZhcyxcbmlmcmFtZSxcbmltZyxcbnN2ZyxcbnZpZGVvIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEF1dGhvcidzIGN1c3RvbSBzdHlsZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4qLFxuKjphZnRlcixcbio6YmVmb3JlIHsgXG4td2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5odG1sIHtmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7YmFja2dyb3VuZDogIzMwMzE0NDtjb2xvcjogI2ZmZjtmb250LXdlaWdodDogNjAwO31cblxuLnJvdyB7bWFyZ2luOiAwIC0yMHB4IDMwcHggLTIwcHg7fVxuLnJvdzpiZWZvcmUsXG4ucm93OmFmdGVyIHsgZGlzcGxheTogdGFibGU7IGNsZWFyOiBib3RoOyBjb250ZW50OlwiXCI7IH1cbi5yb3cgPiAqW2NsYXNzICo9IFwiY29sLVwiXSB7IHBvc2l0aW9uOnJlbGF0aXZlOyBmbG9hdDpsZWZ0OyBwYWRkaW5nOiAwIDIwcHg7IH1cbi5jb2wtMS0yIHsgd2lkdGg6IDUwJTsgfVxuLmdyb3VwIHttYXJnaW4tYm90dG9tOiAxNHB4O31cbi53cmFwIHsgd2lkdGg6MTAwJTsgbWF4LXdpZHRoOiAxMDQwcHg7bWFyZ2luOiAwIGF1dG87cGFkZGluZzogNTBweCAyMHB4OyB9XG5oMSB7IGZvbnQtd2VpZ2h0OiA2MDA7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwOyB9XG5oMiB7IGZvbnQtd2VpZ2h0OiAzMDA7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwO2NvbG9yOiAjOTc5OGExO31cbi5jcmVkaXRzIHsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogIzk3OThhMTsgbWFyZ2luLXRvcDogMTBweDtmb250LXNpemU6IDEycHg7IH1cbi5jcmVkaXRzIGEgeyBjb2xvcjogIzAwYzRiOTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4uYmFkZ2Vze21hcmdpbjogMjBweCAwIDQwcHggMDtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7fVxuLmJhZGdlcyA+IHNwYW57ZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi10b3A6IDdweDttYXJnaW4tcmlnaHQ6MjBweDt9XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTc5OGExOyB9XG46Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk3OThhMTsgfVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBjb2xvcjogIzk3OThhMTsgfVxuOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk3OThhMTsgfVxuXG5sYWJlbCB7ZGlzcGxheTogYmxvY2s7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXNpemU6IDEzcHg7bGV0dGVyLXNwYWNpbmc6IDFweDttYXJnaW4tYm90dG9tOiA3cHg7IH1cbi5yYWRpbyB7Zm9udC13ZWlnaHQ6IDMwMDt0ZXh0LXRyYW5zZm9ybTogbm9uZTttYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtjb2xvcjogIzk3OThhMTtmb250LXNpemU6IDE0cHg7fVxuLnJhZGlvOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O31cbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge2Zsb2F0OiBsZWZ0O3dpZHRoOiBhdXRvO21hcmdpbi1yaWdodDogMTBweDttYXJnaW4tdG9wOiAzcHg7IH1cbmlucHV0LFxudGV4dGFyZWEge2ZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtkaXNwbGF5OiBibG9jazt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kOiAjMjkyYTNjO2JvcmRlcjogbm9uZTtwYWRkaW5nOiAxM3B4IDIwcHg7Ym9yZGVyLXJhZGl1czogNXB4O2ZvbnQtd2VpZ2h0OiAzMDA7IGZvbnQtc2l6ZTogMTRweDtsZXR0ZXItc3BhY2luZzogMXB4OyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yc31cbnRleHRhcmVhIHsgbWluLWhlaWdodDogNzNweH1cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMgeyBiYWNrZ3JvdW5kOiAjMjQyNjM4OyB9XG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuYnV0dG9uOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxuXG5idXR0b24ge2ZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtwYWRkaW5nOiAxMnB4IDA7Zm9udC13ZWlnaHQ6IDYwMDtjb2xvcjogI2ZmZjt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgICBtYXJnaW4tbGVmdDogNHB4O2JhY2tncm91bmQ6ICNmZjU5NDI7Ym9yZGVyOiBub25lO2JvcmRlci1yYWRpdXM6IDVweDtmb250LXNpemU6IDEzcHg7bGV0dGVyLXNwYWNpbmc6IDFweDt3aWR0aDogMTU3cHg7dHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnN9XG5idXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjY2M0NzM0IH1cbi5zaG93IHtiYWNrZ3JvdW5kOiAjMDBjNGI5O31cbi5zaG93OmhvdmVyIHtiYWNrZ3JvdW5kOiMwMTllOTY7fVxuXG5cbi5zcGVjIHtiYWNrZ3JvdW5kOiAjMjkyYTNkOyBib3JkZXItcmFkaXVzOiA1cHg7IHBhZGRpbmc6IDI1cHggMjBweDt9XG4uc3BlYzpiZWZvcmUsXG4uc3BlYzphZnRlciB7IGNsZWFyOiBib3RoOyBkaXNwbGF5OiB0YWJsZTsgY29udGVudDogJyc7fVxuLnNwZWMgLmdyb3VwIHsgd2lkdGg6IDUwJTtmbG9hdDogbGVmdDsgbWFyZ2luOiAwOyB9XG4uc3BlYyAuZ3JvdXAgbGFiZWx7bWFyZ2luLWJvdHRvbTogMTFweDt9XG4uYnV0dG9ucyB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4ub3B0aW9ucy13cmFwIHsgIG1hcmdpbi10b3A6IDUwcHg7fVxuLm9wdGlvbnMgeyBiYWNrZ3JvdW5kOiAjMjkyYTNlOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA1cHggfVxucHJlIHsgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzk3OThhMTt3aGl0ZS1zcGFjZTogaW5pdGlhbDt9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBIZWxwZXIgY2xhc3Nlc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5oaWRkZW4geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIE1lZGlhIFF1ZXJpZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gICAgLnJvdyB7IG1hcmdpbjogMDt9XG4gICAgLnJvdyA+ICpbY2xhc3MgKj0gXCJjb2wtXCJdIHsgIGZsb2F0Om5vbmU7IHBhZGRpbmc6IDA7IH1cbiAgICAuY29sLTEtMiB7IHdpZHRoOiAxMDAlOyB9XG4gICAgLmJ1dHRvbnMgeyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gICAgYnV0dG9uIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDEwcHg7IH1cbn1cblxuLnRvYXN0aXRfX2ljb24tLXBpbjo6YWZ0ZXIge1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnRvYXN0aXRfX2ljb24tLXN1Y2Nlc3M6OmFmdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b2FzdGl0X19pY29uLS1pbmZvOjphZnRlciB7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4udG9hc3RpdF9faWNvbi0td2FybmluZzo6YWZ0ZXIge1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnRvYXN0aXRfX2ljb24tLXByb2dyZXNzOjphZnRlciB7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuIl19 */", '', '']]

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!**********************************************************************************!*\
  !*** /mnt/c/--projects--/ngx-toastit/node_modules/style-loader/lib/addStyles.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!*****************************************************************************!*\
  !*** /mnt/c/--projects--/ngx-toastit/node_modules/style-loader/lib/urls.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./styles.css */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/--projects--/ngx-toastit/projects/toastit-tester/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map