const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    //helpful when more complex dynamic class code
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { second: this.boxBSelected };
    },
    boxCClasses() {
      return { third: this.boxCSelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        //Toggle
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
