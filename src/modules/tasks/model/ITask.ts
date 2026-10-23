export interface ITask {
    taskId: string,
    description: string,
    priority: 'low' | 'medium' | 'high',
    status: 'toPlan' | 'toProcess' | 'toTesting' | 'onDone',
}