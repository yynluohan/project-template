
export default {
  namespace: 'home',
  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {

      });
    },
  },

  effects: {

    *query({ payload },{ call,put }) {

    },

  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
