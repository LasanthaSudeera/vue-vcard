<template>
  <div>
    <img
      v-if="showQR"
      :src="
        'https://chart.googleapis.com/chart?cht=qr&chs=' +
          size +
          'x' +
          size +
          '&chl=' +
          generateString
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    showQR: {
      default: true,
      type: Boolean,
    },
    size: {
      default: 200,
      type: Number,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthday: String,
    gender: String,
    workPhone: String,
    homePhone: String,
    workEmail: String,
    homeEmail: String,
    orgName: String,
    orgTitle: String,
    homeStreet: String,
    homeCity: String,
    homeRegion: String,
    homePost: String,
    homeCountry: String,
    orgStreet: String,
    orgCity: String,
    orgRegion: String,
    orgPost: String,
    orgCountry: String,
  },
  created() {
    this.addPersonalInfo();
    this.addContactInformation();
    this.addWorkDetails();
  },
  data() {
    return {
      vCardStart: "BEGIN:VCARD\nVERSION:3.0\n",
      vCardEnd: "\nEND:VCARD",
      vCard: "",
    };
  },
  methods: {
    addPersonalInfo: function() {
      this.vCard +=
        "N:" +
        this.lastName +
        ";" +
        this.firstName +
        "\n" +
        "FN:" +
        this.firstName +
        " " +
        this.lastName;

      if (this.birthday !== undefined) {
        this.vCard += "\nBDAY:" + this.birthday;
      }

      if (this.gender !== undefined) {
        this.vCard += "\nX-GENDER:" + this.gender;
      }
    },
    addContactInformation: function() {
      // Add if phone number is provided
      if (this.homePhone !== undefined) {
        this.vCard += "\nTEL;TYPE=home:" + this.homePhone;
      }

      if (this.workPhone !== undefined) {
        this.vCard += "\nTEL;TYPE=work:" + this.workPhone;
      }

      // Add if email is provided
      if (this.workEmail !== undefined) {
        this.vCard += "\nEMAIL;TYPE=internet,home:" + this.workEmail;
      }

      if (this.homeEmail !== undefined) {
        this.vCard += "\nEMAIL;TYPE=internet,work:" + this.homeEmail;
      }
    },
    addWorkDetails: function() {
      if (this.orgTitle !== undefined) {
        this.vCard += "\nORG:" + this.orgTitle;
      }

      if (this.orgName !== undefined) {
        this.vCard += "\nTITLE:" + this.orgName;
      }
    },
    addAddressDetails: function() {
      if (
        this.homeStreet +
          this.homeCity +
          this.homeRegion +
          this.homePost +
          this.homeCountry !==
        undefined
      ) {
        this.vCard +=
          "\nADR;TYPE=home:;;" +
          this.homeStreet +
          ";" +
          this.homeCity +
          ";" +
          this.homeRegion +
          ";" +
          this.homePost +
          ";" +
          this.homeCountry;
      }
      if (
        this.orgStreet +
          this.orgCity +
          this.orgRegion +
          this.orgPost +
          this.orgCountry !==
        undefined
      ) {
        this.vCard +=
          "\nADR;TYPE=work:;;" +
          this.orgStreet +
          ";" +
          this.orgCity +
          ";" +
          this.orgRegion +
          ";" +
          this.orgPost +
          ";" +
          this.orgCountry;
      }
    },
  },
  computed: {
    generateString: function() {
      let vString = this.vCardStart + this.vCard + this.vCardEnd;
      let QRString = vString.replace(/\n/g, "%0A");
      this.$emit("QRString", QRString);
      // console.log(QRString);
      return QRString;
    },
  },
};
</script>
