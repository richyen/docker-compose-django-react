// The API key is tied to a TinyMCE account and is needed to run the editor
export const EDITOR_API_KEY =
  'fd6iva9xtxvaq84yxqc3o21uvj0kxxfodtgan0g7eteuhb0t';

// Includes settings such as size of editor and desired controls
// '|' divides the toolbar into sections
export const EDITOR_INIT = {
  height: 500,
  menubar: true,
  plugins: [
    'advlist lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount textpattern'
  ],
  toolbar:
    'undo redo | fontselect | fontsizeselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | preview | help'
};
