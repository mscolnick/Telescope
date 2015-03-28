addToPostSchema.push(
  {
    propertyName: 'url',
    propertySchema: {
      type: String,
      label: "URL",
      optional: true,
      autoform: {
        editable: true,
        type: "bootstrap-url",
        omit: true
      }
    }
  }
);

var companyName = {
  propertyName: 'companyName',
  propertySchema: {
    type: String,
    optional: false,
    autoform: {
      instructions: 'Company Name',
      options: [
        {value: 'dropbox', label: 'Dropbox'},
        {value: 'amazon', label: 'Amazon'},
        {value: 'google', label: 'Google'},
        {value: 'apple', label: 'Apple'},
        {value: 'facebook', label: 'Facebook'},
      ]
    }
  }
}
addToPostSchema.push(companyName);
