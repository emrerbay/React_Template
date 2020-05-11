export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      title: true,
      name: 'Examples',
    },
    {
      name: 'Crud Page',
      url: '/examples/crud-page',
      icon: 'icon-drop',
    },
  ],
}
