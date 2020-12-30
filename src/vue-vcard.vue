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
  },
  created() {
    this.addPersonalInfo();
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

      if (this.birthday !== "") {
        this.vCard += "\nBDAY:" + this.birthday;
      }

      if (this.gender !== "") {
        this.vCard += "\nX-GENDER:" + this.gender;
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
