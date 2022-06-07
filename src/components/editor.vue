<template>
  <div class="json-editor">
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label-->
    <textarea ref="codemirror" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

// active line is highlighted
import 'codemirror/addon/selection/active-line';

// collapse code
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';

// brackets
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';

// check
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/javascript-lint';

export default {
  name: 'JsonEditor',
  props: {
    value: {
      type: [String, Number, Object, Array],
      required: true,
    },
  },
  data() {
    return {
      jsonEditor: false,
    };
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.codemirror, {
      mode: 'application/javascript',
      autofocus: true,
      styleActiveLine: true,
      lineNumbers: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      foldGutter: true,
      gutters: [
        'CodeMirror-lint-markers',
        'CodeMirror-linenumbers',
        'CodeMirror-foldgutter',
      ],
      lint: { options: { esversion: 2021 } },
    });

    this.jsonEditor.setValue(this.value);

    this.jsonEditor.on('change', (i) => {
      this.$emit('input', i.getValue());
    });
  },
};
</script>

<style scoped>
>>> .CodeMirror {
  line-height: 1.5;
  border: 1px solid rgba(0,0,0,.5);
  min-height: calc(100vh - 120px);
}
>>> .CodeMirror-linenumbers {
  width: 24px !important;
}
>>> .CodeMirror-gutter-wrapper > .CodeMirror-linenumber {
  left: 6px !important;
}
</style>
