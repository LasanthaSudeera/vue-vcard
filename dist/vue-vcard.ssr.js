'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    showQR: {
      default: true,
      type: Boolean
    },
    size: {
      default: 200,
      type: Number
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    birthday: String,
    gender: String,
    workPhone: String,
    homePhone: String,
    workEmail: String,
    homeEmail: String,
    orgName: String,
    orgTitle: String,
    homeStreet: {
      default: '',
      type: String
    },
    homeCity: {
      default: '',
      type: String
    },
    homeRegion: {
      default: '',
      type: String
    },
    homePost: {
      default: '',
      type: String
    },
    homeCountry: {
      default: '',
      type: String
    },
    orgStreet: {
      default: '',
      type: String
    },
    orgCity: {
      default: '',
      type: String
    },
    orgRegion: {
      default: '',
      type: String
    },
    orgPost: {
      default: '',
      type: String
    },
    orgCountry: {
      default: '',
      type: String
    }
  },
  created: function created() {
    this.addPersonalInfo();
    this.addContactInformation();
    this.addWorkDetails();
    this.addAddressDetails();
  },
  data: function data() {
    return {
      vCardStart: "BEGIN:VCARD\nVERSION:3.0\n",
      vCardEnd: "\nEND:VCARD",
      vCard: ""
    };
  },
  methods: {
    addPersonalInfo: function addPersonalInfo() {
      this.vCard += "N:" + this.lastName + ";" + this.firstName + "\n" + "FN:" + this.firstName + " " + this.lastName;

      if (this.birthday !== undefined) {
        this.vCard += "\nBDAY:" + this.birthday;
      }

      if (this.gender !== undefined) {
        this.vCard += "\nX-GENDER:" + this.gender;
      }
    },
    addContactInformation: function addContactInformation() {
      // Add if phone number is provided
      if (this.homePhone !== undefined) {
        this.vCard += "\nTEL;TYPE=home:" + this.homePhone;
      }

      if (this.workPhone !== undefined) {
        this.vCard += "\nTEL;TYPE=work:" + this.workPhone;
      } // Add if email is provided


      if (this.workEmail !== undefined) {
        this.vCard += "\nEMAIL;TYPE=internet,home:" + this.workEmail;
      }

      if (this.homeEmail !== undefined) {
        this.vCard += "\nEMAIL;TYPE=internet,work:" + this.homeEmail;
      }
    },
    addWorkDetails: function addWorkDetails() {
      if (this.orgTitle !== undefined) {
        this.vCard += "\nORG:" + this.orgTitle;
      }

      if (this.orgName !== undefined) {
        this.vCard += "\nTITLE:" + this.orgName;
      }
    },
    addAddressDetails: function addAddressDetails() {
      if (this.homeStreet + this.homeCity + this.homeRegion + this.homePost + this.homeCountry !== '') {
        this.vCard += "\nADR;TYPE=home:;;" + this.homeStreet + ";" + this.homeCity + ";" + this.homeRegion + ";" + this.homePost + ";" + this.homeCountry;
      }

      if (this.orgStreet + this.orgCity + this.orgRegion + this.orgPost + this.orgCountry !== '') {
        this.vCard += "\nADR;TYPE=work:;;" + this.orgStreet + ";" + this.orgCity + ";" + this.orgRegion + ";" + this.orgPost + ";" + this.orgCountry;
      }
    }
  },
  computed: {
    generateString: function generateString() {
      var vString = this.vCardStart + this.vCard + this.vCardEnd;
      var QRString = vString.replace(/\n/g, "%0A");
      this.$emit("QRString", QRString); // console.log(QRString);

      return QRString;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode(_vm.showQR ? "<img" + _vm._ssrAttr("src", 'https://chart.googleapis.com/chart?cht=qr&chs=' + _vm.size + 'x' + _vm.size + '&chl=' + _vm.generateString) + ">" : "<!---->")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-3f897c5e";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);// Import vue component

var install = function installVueVcard(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueVcard', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;