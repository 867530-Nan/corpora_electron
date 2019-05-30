<template>
  <div class="uploader-wrap">
    <StyledInput
      class="uploadInput"
      placeholder="Title"
      type="text"
      @input="editTitle($event.target.value)"
    />
    <StyledInput
      class="uploadInput"
      placeholder="URL"
      type="text"
      @input="editItem($event.target.value)"
    />
    <StyledButton
      @click="
        event => {
          $emit('handleURLUpload', urlItem, urlTitle, resetStrings);
        }
      "
      margin="20px 0 0 0"
      :borderColor="styled(`border`)"
      width="90%"
    >Upload</StyledButton>
  </div>
</template>

<script>
import { StyledButton, ReadStyleGuide, StyledInput } from "../styled/index";

export default {
  components: { StyledButton, StyledInput },
  data() {
    return {
      urlItem: "",
      urlTitle: ""
    };
  },
  methods: {
    resetStrings() {
      this.urlItem = "";
      this.urlTitle = "";
    },
    styled(e) {
      if (e === "border") {
        return ReadStyleGuide.color.lightGreen;
      }
    },
    editTitle(e) {
      this.urlTitle = e;
    },
    editItem(e) {
      this.urlItem = e;
    }
  }
};
</script>

<style>
.submitButton {
  width: 300px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
  border: 2px solid pink;
  border: 2px solid gainsboro;
  box-shadow: 0 0 1px 1px gainsboro;
}
.submitButton:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px 5px gainsboro;
}
</style>
