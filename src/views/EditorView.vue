<template>
  <div class="container">
    <h2>JavaScript Editor</h2>
    <JsonEditor
      :value="jsonValue"
      @input="getEditorValue"
    />
  </div>
</template>

<script>
import JsonEditor from '@/components/editor';

export default {
  name: 'EditorViewer',
  components: {
    JsonEditor,
  },
  data() {
    return {
      jsonValue: '',
    };
  },
  methods: {
    getEditorValue(val) {
      this.jsonValue = val;
    },
  },
};
</script>
