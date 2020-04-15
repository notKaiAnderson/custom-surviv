// ==UserScript==
// @name         Free Custom Surviv.io Skins and Mods (NEW)
// @namespace    https://github.com/notKaiAnderson/
// @version      0.9.9
// @description   a free and purely cosmetic script that lets you use custom skins during games, it even lets you make your own skins!
// @author       someGays
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// @icon         https://i.imgur.com/jgHdTYA.png
// @run-at       document-end
// ==/UserScript==

(function () {

    // checkVersion 
    // to clear local storage if old version
    if (!localStorage.getItem('version')) {
        localStorage.setItem('version', '0.9.9')
    } else if (localStorage.getItem('version') != '0.9.9') {
        localStorage.clear();
        localStorage.setItem('version', '0.9.9')
    }
    // make console.log() work
    console.log = console.info;
    // script html
    let ehtml = `
        <div id="ad-block-left" class="custom-wrapper" style="display: block;">
        olimpiqisgay)
        </div>
        `;
    document.querySelector("#ad-block-left").style.display = "none";
    let leftColumnEle = document.querySelector("#left-column");
    leftColumnEle.insertAdjacentHTML("afterbegin", ehtml);
    let left = document.querySelector(".custom-wrapper");
    left.innerHTML = `<div class="contents">
            <div class="tabs">
                <div class="tab" style="flex-basis: 80%">Select Skin</div>
                <div class="tab icon" style="flex-basis: 20%">
                <svg class="svg-icon" viewBox="0 0 20 20">
                        <path fill="none"
                            d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z">
                        </path>
                        <path fill="none"
                            d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="container content">
                <div class="skins">
                </div>
            </div>
            <div class="container content set">
                <div class="modal-settings-item">
                    <label>Dark mode</label>
                    <input type="checkbox" id="enableDarkTheme">
                </div>
            </div>
                    <div class="footer">
                <p>report bugs on <a href="https://discord.gg/dgB6G3">Discord</a> 🐓</p>
            </div>
            </div>

        `;
    let skinItems = document.querySelector(".skins");
    let skinsArr;
    if (localStorage.getItem("skinsArr")) {
        skinsArr = JSON.parse(localStorage.getItem("skinsArr"))
    } else {
        skinsArr = [{
            skinName: "Splotchfest",
            skinImg: "https://i.imgur.com/ecxThQD.png"
        }, {
            skinName: "Sunset",
            skinImg: "https://i.imgur.com/FOLsISk.png"
        }, {
            skinName: "Clay More",
            skinImg: "https://i.imgur.com/gdATfiF.png"
        }, {
            skinName: "military",
            skinImg: "https://i.imgur.com/veSbV1W.png"
        }, {
            skinName: "chromesis",
            skinImg: "https://i.imgur.com/vVGKKVB.png"
        }, {
            skinName: "Woodcutters Wrap",
            skinImg: "https://i.imgur.com/sfNrjAh.png"
        }, {
            skinName: "Developer Swag",
            skinImg: "https://i.imgur.com/NGi63mJ.png "
        }, {
            skinName: "Valiant Pineapple",
            skinImg: "https://i.imgur.com/Di76DSD.png"
        }, {
            skinName: "Casanova Silks",
            skinImg: "https://i.imgur.com/Z0gQ50L.png"
        }, {
            skinName: "Fowl Facade",
            skinImg: "https://i.imgur.com/E5aKOMD.png"
        }, {
            skinName: "Blue Leader",
            skinImg: "https://i.imgur.com/45x0HtU.png"
        }, {
            skinName: "Siberian Assault",
            skinImg: "https://i.imgur.com/fpMYnjD.png"
        }, {
            skinName: "Red Leader",
            skinImg: "https://i.imgur.com/8ZRZcnw.png"
        }, {
            skinName: "Tarkhany Regal",
            skinImg: "https://i.imgur.com/ju8Qsao.png"
        }, {
            skinName: "Purple Fade",
            skinImg: "https://i.imgur.com/Qp91Kst.png"
        }, {
            skinName: "Geometric",
            skinImg: "https://i.imgur.com/O5njOlQ.png"
        }, {
            skinName: "Marshmallow Suit",
            skinImg: "https://i.imgur.com/xCvnTXp.png"
        }];
        localStorage.setItem("skinsArr", JSON.stringify(skinsArr))
    }
    String.prototype.toCamelCase = function () {
        return this.replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase()
        }).replace(/\s/g, "").replace(/^(.)/, function ($1) {
            return $1.toLowerCase()
        })
    };
    if (localStorage.getItem("skins")) {
        skinItems.innerHTML = localStorage.getItem("skins")
    } else {
        updateSkinUI()
    }

    // update the UI of the skins everytime someone add new skins
    function updateSkinUI() {
        skinItems.innerHTML = "";
        skinsArr.forEach(ee => {
            let html;
            if (ee.custom) {
                html = `
                    <div class="skin-item" id="${ee.skinName.toCamelCase()}">
                    <div href="#" class="delete-skin" id="deleteSkinItem"><img class="deleteSkinIcon" src="https://i.imgur.com/hTjlxKF.png"></div>
                        <img src="${ee.skinImg}" class="skin-img" />
                        <h4 class="skin-name">${ee.skinName}</h4>
                    </div>
                    `
            } else {
                html = `
                    <div class="skin-item" id="${ee.skinName.toCamelCase()}">
                        <img src="${ee.skinImg}" class="skin-img" />
                        <h4 class="skin-name">${ee.skinName}</h4>
                    </div>
                    `
            }
            skinItems.innerHTML += html
        });
        localStorage.setItem("skins", skinItems.innerHTML)
    }
    let skinItem = document.querySelectorAll(".skin-item");
    // dark theme css
    let darkModeCss = `body.dark:root{--start-background:url('');--splash-background:;--dark-color:#1f1f1f;--light-dark-color:#676767}body.dark #start-row-header{background-image:var(--start-background)}body.dark #background{background-image:url('https://i.imgur.com/yxZVwZ6.png') !important}body.dark #start-overlay{background-color:rgba(0,0,0,.4)}body.dark #account-login,body.dark #btn-help,body.dark body.dark #server-select-main,body.dark #start-bottom-left,body.dark #start-bottom-middle,body.dark #start-top-left,body.dark .account-block-arrow::after,body.dark .account-loading-container,body.dark .language-select-wrap{display:none !important}body.dark .modal-customize-cat-connect{background:#676767}body.dark .modal-content-right{background:#363636}body.dark #ui-modal-keybind-body{background-color:#363636}body.dark .account-buttons > .menu-option:last-child{margin-bottom:0} body.dark .pass-toggle{background-image:url("http://surviv.io/img/gui/close.svg")}body.dark #start-menu{display:block;}body.dark .menu-option{background-color:#1f1f1f !important;box-shadow:inset 0 -4px black !important;border:none !important;border-radius:0}body.dark .player-name-input{box-shadow:unset !important;background-color:#ffffff40 !important}body.dark .player-name-input::placeholder{color:#292929}body.dark .name.menu-option{background:#ffffff40 !important;box-shadow:none !important}body.dark .team-menu-option{border-radius:0}body.dark #btn-customize{background-color:unset !important;box-shadow:unset !important}body.dark body.dark #start-row-header{margin-bottom:0}body.dark body.dark .account-details-block{width:unset;background:#ffffff40}body.dark body.dark .account-details{width:fit-content;padding:0}body.dark .account-buttons{padding:3px;background:#ffffff40} body.dark .btn-game-menu{background-color:#1f1f1f !important;box-shadow:inset 0 -4px black !important;border:none !important;border-radius:0;animation:none !important;background-image:none !important;text-indent:0 !important}body.dark .modal-footer,body.dark .modal-header{background-color:#1f1f1f !important}body.dark #modal-customize-body{background-color:#363636}body.dark .modal-customize-cat-selected{background:#3e3838!important} body.dark #modal-item-confirm .modal-body {background-color: #1d1d1d;} #modal-customize-item-sell-container {background-color: transparent;}`;

    // append script css to <head>
    function addStyleString(str) {
        let node = document.createElement("style");
        node.innerHTML = str;
        document.body.appendChild(node)
    }
    // script css
    addStyleString(`.active { color: green; border: 2px solid #668e38;} .content {display: none;}; .skin-name {margin: 10px;} .tab {display: flex !important;} .active-tab {display: block !important} .contents {display: flex; flex-direction: column; width: 100%; overflow-y: scroll; height: 100%;text-align: center; box-sizing: border-box;} .container {width: 100%; flex: 1 0 auto;} .skins {display: flex; box-sizing: border-box; flex-wrap: wrap} .maps {display: flex; box-sizing: border-box; flex-wrap: wrap} .skin-item, .map-item {flex-grow: 1; flex-basis: 50%; position: relative; cursor: pointer; box-sizing: border-box; padding: 10px 0;} .tabs {display: flex !important;} .tab {display: inline-block !important; flex-grow: 1; padding: 10px; background: rgba(0, 0, 0, 0.28); cursor: pointer; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd;} #ad-block-left {height: 325px;} #social-share-block-wrapper {display: none;} .tab.active-tab {background: #000;} .footer {background-color: #000; padding: 10px; border-top: 1px solid #ddd; flex-shrink: 0;} .footer p {margin:0; text-align: center;} .tab.icon { padding: 0; display: flex !important; justify-content: center; align-items: center;} .svg-icon { width: 1.5em; height: 1.5em; } .svg-icon path, .svg-icon polygon, .svg-icon rect { fill: #ffffff; } .svg-icon circle { stroke: #ffffff; stroke-width: 1;} .container.set .modal-settings-item {padding: 10px 0; } .btn-custom {-webkit-animation-name:custom-pulse;-webkit-animation-duration:5s;border-bottom:4px solid #00448a}@-webkit-keyframes custom-pulse{from{background-color:#8a9e69;border-bottom-color:#8a9e69;-webkit-box-shadow:0 0 9px #8a9e69}25%{background-color:#318585;border-bottom-color:#208686;-webkit-box-shadow:0 0 18px #318585}75%{background-color:#675fe0;border-bottom-color:#312b8a;-webkit-box-shadow:0 0 18px #675fe0}to{background-color:#8a9e69;border-bottom-color:#8a9e69;-webkit-box-shadow:0 0 9px #8a9e69}}#deleteSkinItem { position: absolute; right: 2px;} .btn-submit { margin-left: 10px; padding: 5px 10px; font-size: 1.3rem; background: #191616; color: #fff; border: solid 1px #fff; border-radius: 4px;} #addSkinName { font-size: 1.5rem;}${darkModeCss}`);

    let tabLinks = document.querySelectorAll(".tab");
    let tabContents = document.querySelectorAll(".content");
    tabLinks[0].classList.add("active-tab");
    tabContents[0].classList.add("active-tab");
    tabLinks.forEach((tabLink, i) => {
        tabLink.addEventListener("click", () => {
            tabLinks.forEach(tabLink => tabLink.classList.remove("active-tab"));
            tabContents.forEach(tabContent => tabContent.classList.remove("active-tab"));
            tabLink.classList.add("active-tab");
            tabContents[i].classList.add("active-tab")
        })
    });
    let skinOutfit = webpackJsonp([], null, ["63d67e9d"]);
    class Skin {
        constructor(baseTint, handTint, backpackTint, baseSprite = "player-base-02.img", handSprite = "player-hands-02.img", backpackSprite = "player-circle-base-02.img", footSprite = "player-feet-02.img", footTint = handTint) {
            this.baseTint = baseTint;
            this.handTint = handTint;
            this.backpackTint = backpackTint;
            this.baseSprite = baseSprite;
            this.handSprite = handSprite;
            this.backpackSprite = backpackSprite;
            this.footSprite = footSprite;
            this.footTint = footTint;
            skinOutfit.outfitBase.skinImg.baseTint = parseInt(this.baseTint);
            skinOutfit.outfitBase.skinImg.baseSprite = this.baseSprite;
            skinOutfit.outfitBase.skinImg.handTint = parseInt(this.handTint);
            skinOutfit.outfitBase.skinImg.handSprite = this.handSprite;
            skinOutfit.outfitBase.skinImg.backpackTint = parseInt(this.backpackTint);
            skinOutfit.outfitBase.skinImg.backpackSprite = this.backpackSprite;
            skinOutfit.outfitBase.skinImg.footTint = parseInt(this.footTint);
            skinOutfit.outfitBase.skinImg.footSprite = this.footSprite;
            skinOutfit.outfitBase.ghillie = parseInt(this.ghillie)
        }
        lootImg(sprite = "loot-shirt-01.img", tint = 16777215) {
            this.sprite = sprite;
            this.tint = tint;
            skinOutfit.outfitBase.lootImg.sprite = this.sprite;
            skinOutfit.outfitBase.lootImg.tint = parseInt(this.tint)
        }
        accessory(accSprite = '') {
            this.accSprite = accSprite;
            skinOutfit.outfitBase.accessory = {}
            skinOutfit.outfitBase.accessory.sprite = this.accSprite
        }
    }
    let SkinRules = {};
    let skinArrTest;
    if (localStorage.getItem("skinArrTest")) {
        skinArrTest = JSON.parse(localStorage.getItem("skinArrTest"))
    } else {
        skinArrTest = [{
            name: "splotchfest",
            skin: [16777215, 6530876, 6530876, "player-base-outfitSplotchfest.img", "player-hands-01.img", "player-circle-base-01.img", "player-feet-01.img"],
            lootImg: ["loot-shirt-outfitSplotchfest.img"]
        }, {
            name: "sunset",
            skin: [16777215, 12487083, 6458057, "player-base-outfitSunset.img", "player-hands-01.img", "player-circle-base-01.img", "player-feet-01.img"],
            lootImg: ["loot-shirt-outfitSunset.img"]
        }, {
            name: "clayMore",
            skin: [14935011, 11030570, 15632257, "player-base-outfitClayMore.img", "player-hands-01.img", "player-circle-base-01.img", "player-feet-01.img"],
            lootImg: ["loot-shirt-outfitClayMore.img"]
        }, {
            name: "geometric",
            skin: [16777215, 16777215, 544848, "player-base-outfitGeometric.img", "player-hands-geometric.img", undefined, undefined, 544848],
            lootImg: ["loot-shirt-outfitGeometric.img"]
        }, {
            name: "military",
            skin: [6777215, 16777215, 4873026, "player-base-outfitMilitary.img", "player-hands-military.img", undefined, undefined, 4873026],
            lootImg: ["loot-shirt-outfitMilitary.img"]
        }, {
            name: "chromesis",
            skin: [16777215, 16777215, 9803157, "player-base-outfitChromesis.img", "player-hands-chrome.img", "player-circle-base-01.img", "player-feet-01.img", 16777215],
            lootImg: ["loot-shirt-outfitChromesis.img"],
            accSprite: ["outfit-chrome-accessory.img"]
        }, {
            name: "developerSwag",
            skin: [3442216, 6937122, 2902793, "player-base-outfitDC.img"],
            lootImg: ["loot-shirt-outfitDev.img"]
        }, {
            name: "tarkhanyRegal",
            skin: [4927107, 16757760, 4661344],
            lootImg: [undefined, 4927107]
        }, {
            name: "valiantPineapple",
            skin: [10027008, 4985105, 16763904],
            lootImg: [undefined, 10027008]
        }, {
            name: "casanovaSilks",
            skin: [4327436, 7602183, 1052688, "player-base-01.img", "player-hands-01.img", "player-circle-base-01.img", "player-feet-01.img"],
            lootImg: [undefined, 4327436]
        }, {
            name: "woodcuttersWrap",
            skin: [16777215, 8258312, 4854547, "player-base-outfitLumber.img"],
            lootImg: ["loot-shirt-outfitLumber.img"]
        }, {
            name: "redLeader",
            skin: [10158080, 16711680, 5439488],
            lootImg: [undefined, 8650752]
        }, {
            name: "blueLeader",
            skin: [1523353, 20223, 794700],
            lootImg: [undefined, 1523353]
        }, {
            name: "siberianAssault",
            skin: [16777215, 15000804, 13816530, "player-base-outfitSpetsnaz.img", "player-hands-01.img", "player-circle-base-01.img", "player-feet-01.img"],
            lootImg: ["loot-shirt-outfitSpetsnaz.img"]
        }, {
            name: "purpleFade",
            skin: [16777215, 6570404, 6570404, "https://i.imgur.com/fxmaqPL.png"],
            lootImg: [undefined, 0x6843ab]
        }, {
            name: "fowlFacade",
            skin: [5781563, 10818304, 11031846, "player-base-outfitTurkey.img"],
            lootImg: ["loot-shirt-outfitTurkey.img", 15781563]
        }, {
            name: "marshmallowSuit",
            skin: [16777215, 16777215, 13024064, "player-base-outfitWhiteDay.img", "player-hands-white.img", "player-circle-base-03.img"],
            lootImg: ["loot-shirt-whiteDay.img", 16777215]
        }];
        localStorage.setItem("skinArrTest", JSON.stringify(skinArrTest))
    }
    class Template {
        constructor(name, skin, lootImg, accessory) {
            this.name = name;
            this.skin = skin;
            this.lootImg = lootImg;
            this.accessory = accessory;
            let ename = this.name;
            SkinRules[ename] = () => {
                let ename = new Skin(...this.skin);
                ename.lootImg(...this.lootImg);
                console.log(this.accessory)
                if (this.accessory === undefined) {
                    ename.accessory('')
                } else {
                    ename.accessory(...this.accessory);
                }
            }
        }
    }

    function updateSkinRules() {
        skinArrTest.forEach(f => {
            let g = new Template(f.name, f.skin, f.lootImg, f.accSprite);
        })
    }
    updateSkinRules();
    skinItems.addEventListener("click", better);

    function better(e) {
        if (SkinRules.hasOwnProperty(e.target.id)) {
            SkinRules[e.target.id]();
            skinRemoveBorder();
            e.target.className += " active";
            console.log(SkinRules[e.target.id])
        } else if (SkinRules.hasOwnProperty(e.target.parentElement.id)) {
            SkinRules[e.target.parentElement.id]();
            skinRemoveBorder();
            e.target.parentElement.className += " active";
            console.log(SkinRules[e.target.parentElement.id])
        }
        if (e.target.classList.contains("deleteSkinIcon")) {
            let skinEle = e.target.parentElement.parentElement;
            skinEle.remove();
            skinsArr = skinsArr.filter(skin => {
                return skin.skinName != skinEle.querySelector(".skin-name").textContent
            });
            localStorage.setItem("skinsArr", JSON.stringify(skinsArr));
            skinArrTest = skinArrTest.filter(skin => {
                return skin.name != skinEle.id
            });
            localStorage.setItem("skinArrTest", JSON.stringify(skinArrTest));
            localStorage.setItem("skins", skinItems.innerHTML)
        }
    }

    function skinRemoveBorder() {
        skinItem = document.querySelectorAll(".skin-item");
        skinItem.forEach(item => {
            item.classList.remove("active")
        })
    }

    const settingsEle = document.querySelector(".container.set");
    if (localStorage.getItem('dark theme') === 'true') {
        document.body.classList.add("dark")
        document.querySelector("#enableDarkTheme").checked = true;
    }
    settingsEle.addEventListener("click", e => {
        if (document.querySelector("#enableDarkTheme").checked) {
            document.body.classList.add("dark")
            localStorage.setItem('dark theme', 'true')
        } else {
            document.body.classList.remove("dark")
            localStorage.setItem('dark theme', 'false')
        }
    });

    // custom loaudout
    let bodyColor;
    let handsColor;
    let backpackColor;
    let bodySprite;
    let handSprite;
    let backSprite;
    let feetSprite;
    let skinNameEle;
    const laodoutBtn = document.querySelector("#player-options #btn-customize");
    laodoutBtn.className = "btn-darken menu-option player-options-btn btn-custom-mode-main btn-custom";
    laodoutBtn.addEventListener("click", temp1, !1);

    function temp1() {
        var lodoutOutfit = document.querySelector("#modal-customize-list");
        var colorPicker = `
                <div class="container" style="color: white; padding: 10px 5px">
                <div style="padding: 10px 0">
                <label>body color</label>
                <input type="color" id="bodyColorPicker" value="#f8c574">
                </div>

                <div style="padding: 10px 0">
                <label>hands color</label>
                <input type="color" id="handsColorPicker" value="#f8c574">
                </div>

                <div style="padding: 10px 0">
                <label>backpack color</label>
                <input type="color" id="backpackColoPicker" value="#816537">
                </div>

                <div class="choose-sprite" style="display: flex;">
                <div class="outfit">
                <h4 style="padding: 0; text-align: center;">player-base-01</h4>
                <img id="base01" class="customize-list-item" src="https://surviv.io/img/player/player-base-01.svg" alt="player-base-01">
                </div>
                <div class="outfit">
                <h4 style="padding: 0; text-align: center;">player-base-02</h4>
                <img id="base02" class="customize-list-item" src="https://surviv.io/img/player/player-base-02.svg" alt="player-base-02">
                </div>
                <div class="outfit">
                <h4>player-base-outfitHeaven</h4>
                <img id="outfitHeaven" class="customize-list-item" src="https://surviv.io/img/player/player-base-outfitHeaven.svg" alt="player-base-outfitHeaven.svg">
                </div>
                </div>
                <div style="display: flex; align-items: center">
                    <input id="addSkinName" maxlength="16" type="text" required>
                    <button class="btn-submit">add</button>
                </div>
                </div>
            `;
        document.querySelector("#modal-create-account").style.display = "none";
        lodoutOutfit.innerHTML = colorPicker;
        const bodyColorPicker = document.querySelector("#bodyColorPicker");
        bodyColorPicker.addEventListener("change", changeBodyColor, !1);
        var skinOutfit = webpackJsonp([], null, ["63d67e9d"]);

        function changeBodyColor() {
            skinOutfit.outfitBase.skinImg.baseTint = "0x" + bodyColorPicker.value.substring(1);
            bodyColor = "0x" + bodyColorPicker.value.substring(1)
        }
        const handsColorPicker = document.querySelector("#handsColorPicker");
        handsColorPicker.addEventListener("change", changeHandsColor, !1);

        function changeHandsColor() {
            skinOutfit.outfitBase.skinImg.handTint = "0x" + handsColorPicker.value.substring(1);
            skinOutfit.outfitBase.skinImg.footTint = "0x" + handsColorPicker.value.substring(1);
            handsColor = "0x" + handsColorPicker.value.substring(1)
        }
        const backpack = document.querySelector("#backpack");
        const backpackColoPicker = document.querySelector("#backpackColoPicker");
        backpackColoPicker.addEventListener("change", changeBackpackColor, !1);

        function changeBackpackColor() {
            skinOutfit.outfitBase.skinImg.backpackTint = "0x" + backpackColoPicker.value.substring(1);
            backpackColor = "0x" + backpackColoPicker.value.substring(1)
        }
        const chooseSprite = document.querySelector(".choose-sprite");
        chooseSprite.addEventListener("click", function (e) {
            if (e.target.id == "base01") {
                changeSprite("player-base-01.img", "player-hands-01.img", "player-circle-base-01.img", "player-feet-01.img")
            } else if (e.target.id == "base02") {
                changeSprite("player-base-02.img", "player-hands-02.img", "player-circle-base-02.img", "player-feet-02.img")
            }
        });
        skinNameEle = document.querySelector("#addSkinName");

        function changeSprite(base, hand, backpack, feet) {
            skinOutfit.outfitBase.skinImg.baseSprite = base;
            skinOutfit.outfitBase.skinImg.handSprite = hand;
            skinOutfit.outfitBase.skinImg.backpackSprite = backpack;
            skinOutfit.outfitBase.skinImg.footSprite = feet;
            bodySprite = base;
            handSprite = hand;
            backSprite = backpack;
            feetSprite = feet
        }
    }
    document.addEventListener("click", e => {
        if (e.target.classList.contains("btn-submit") && skinNameEle.value.trim() != 0) {
            let name = skinNameEle.value.trim();
            skinsArr.push({
                skinName: name,
                skinImg: "https://i.imgur.com/0cjK0O1.png",
                custom: !0
            });
            localStorage.setItem("skinsArr", JSON.stringify(skinsArr));
            let id = name.toCamelCase();
            skinArrTest.push({
                name: id,
                skin: [bodyColor, handsColor, backpackColor, bodySprite, handSprite, backSprite, feetSprite],
                lootImg: ["loot-shirt-01.img", bodyColor]
            });
            localStorage.setItem("skinArrTest", JSON.stringify(skinArrTest));
            updateSkinUI();
            updateSkinRules();
            skinNameEle.value = ""
        }
    });



    // gun border colors
    // from https://greasyfork.org/en/scripts/398771-surviv-io-gun-color
    let redGuns = ['M1100', 'M870', 'MP220', 'Saiga-12', 'SPAS-12', 'Super 90', 'USAS-12'];
    let yellowGuns = ['CZ-3A1', 'G18C', 'M9', 'M93R', 'MAC-10', 'MP5', 'P30L', 'Dual P30L', 'UMP9', 'Vector', 'VSS'];
    let blueGuns = ['AK-47', 'AN-94', 'BAR M1918', 'BLR 81', 'DP-28', 'Groza', 'Groza-S', 'M1 Garand', 'M39 EMR', 'Mosin-Nagant', 'OT-38', 'OTs-38', 'PKP Pecheneg', 'SCAR-H', 'SV-98', 'SVD-63'];
    let purpleGuns = ['M1911', 'M1A1', 'Mk45G', 'Model 94', 'Peacemaker', 'Vector 45'];
    let greenGuns = ['FAMAS', 'L86A2', 'M249', 'M416', 'M4A1-S', 'Mk 12 SPR', 'QBB-97', 'Scout Elite'];
    let melee = ["Fists", "Karambit Rugged", "Karmabit Prismatic", "Karmabit Drowned", "Bayonet Woodland", "Huntsman", "Karambit", "Bayonet", "Bayonet Rugged", "Bowie", "Huntsman Rugged", "Huntsman Burnished", "Bowie Vintage", "Bowie Frontier", "Wood Axe", "Blood Axe", "Fire Axe", "Katana", "Katana Rusted", "Katana Orchid", 'Naginata', "Machete", "Stone Hammer", "Sledgehammer", "Hook", "Pan", "Knuckles", "Knuckles Rusted", "Knuckles Heroic", "Bonesaw", "Spade"];
    let elems = document.getElementsByClassName('ui-weapon-name');
    Array.from(elems).forEach(elem => {
        elem.addEventListener('DOMSubtreeModified', function () {
            console.log(this.textContent)
            let weaponName = this.textContent;
            let borderColor;
            // using if with arrays to make the code shorter
            if (melee.includes(weaponName)) {
                borderColor = '#000'
            } else if (yellowGuns.includes(weaponName)) {
                borderColor = '#FFAE00';
            } else if (blueGuns.includes(weaponName)) {
                borderColor = '#0066FF';
            } else if (greenGuns.includes(weaponName)) {
                borderColor = '#039E00';
            } else if (redGuns.includes(weaponName)) {
                borderColor = '#FF0000'
            } else if (purpleGuns.includes(weaponName)) {
                border = '#7900FF';
            } else {
                switch (weaponName) {
                    case '': //empty
                    borderColor = 'transparent';
                    break;
                    case 'Flare Gun':
                        borderColor = '#D44600';
                        break;
                    case 'DEagle 50':
                        borderColor = '#292929';
                        break;
                    case 'AWM-S':
                    case 'Mk 20 SSR':
                        borderColor = '#465000';
                        break;
                    case 'Potato Cannon':
                    case 'Spud Gun':
                        borderColor = '#935924';
                        break;
                    case 'M9 Cursed':
                        borderColor = '#323232';
                        break;
                    case 'Bugle':
                        borderColor = '#F2BC21';
                        break;
                    case 'Frag':
                        borderColor = '#837516';
                        break;
                    case 'MIRV':
                        borderColor = '#940000';
                        break;
                    case 'Potato':
                        borderColor = '#958359';
                        break;
                    case 'Smoke':
                        borderColor = '#DDDDDD';
                        break;
                    case 'Snowball':
                        borderColor = '#74D4F8';
                        break;
                    case 'Strobe':
                        borderColor = '#FFF205';
                        break;
                    case 'Iron Bomb':
                        borderColor = '#00FF00';
                        break;
                }

            }
            this.parentNode.style.border = `2px solid ${borderColor}`;
        })
    })



    // disable keys 
    document.addEventListener('keydown', (e) => {
        // '112' F1 key 
        if(e.keyCode == 112) e.preventDefault()
    })


})()
