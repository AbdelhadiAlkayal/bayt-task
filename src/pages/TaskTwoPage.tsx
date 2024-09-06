import TaskTwo from "../components/tasks/taskTwo/TaskTwo";
import Header from "../components/tasks/taskTwo/header/Header";

const TaskTwoPage = () => {
  return (
    <div className="flex flex-col gap-8 h-[100vh] ">
      <Header />
      <TaskTwo />
    </div>
  );
};

export default TaskTwoPage;
