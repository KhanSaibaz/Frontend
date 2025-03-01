import { BaseApi } from '../baseQuery/BaseApi';

const TaskApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => "/api/getTasks",
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: '/api/addTasks',
                method: "POST",
                body: data
            })
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/api/updateTasks/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/api/deleteTasks/${id}`,
                method: "DELETE",
            })
        }),
    })
});

export const { 
    useGetTaskQuery, 
    useAddTaskMutation, 
    useUpdateTaskMutation, 
    useDeleteTaskMutation 
} = TaskApi;

export default TaskApi;
