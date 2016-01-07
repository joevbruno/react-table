function ShowLifeCycle(displayName) {
  return {
    getInitialState: function() {
      console.log(displayName + 'getInitialState' + ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
      return {};
    },
    getDefaultProps: function() {
      console.log(displayName + 'getDefaultProps'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
      return {};
    },

    componentWillMount: function() {
      console.log(displayName + 'componentWillMount'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    },

    componentDidMount: function() {
      console.log(displayName + 'componentDidMount'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    },

    componentWillReceiveProps: function() {
      console.log(displayName + 'componentWillReceiveProps'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    },

    shouldComponentUpdate: function() {
      console.log(displayName + 'shouldComponentUpdate'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
      return true;
    },

    componentWillUpdate: function() {
      console.log(displayName + 'componentWillUpdate'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    },

    componentDidUpdate: function() {
      console.log(displayName + 'componentDidUpdate'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    },

    componentWillUnmount: function() {
      console.log(displayName + 'componentWillUnmount'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    },
    render: function() {
      console.log(displayName + 'render'+ ' [' + new Date().toUTCString() + '] ', "color:black; background:orange; font-size: 16pt");
    }
  };
}

module.exports = ShowLifeCycle;
