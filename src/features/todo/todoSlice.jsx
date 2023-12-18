const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  ],
  filters: {
    status: "Active",
    colors: ["red", "blue"],
  },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(), // Tạo giá trị ID ngẫu nhiên
            text: action.payload,
            completed: false,
          },
        ],
      };
    }

    // Xử lý các loại hành động khác

    default: {
      return state;
    }
  }
}
