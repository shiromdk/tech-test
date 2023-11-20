import { CategoryTable,JobTable,SuburbTable } from './feature/leads/types/type'

export interface Database{
   categories: CategoryTable,
   jobs: JobTable,
   suburbs: SuburbTable
}