import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'



export interface CategoryTable{
    id: Generated<number>
    name: string
    parent_category_id: number
}

export interface JobTable{
    id: Generated<number>
    status:  'new' | 'accepted' | 'declined'
    suburb_id: number
    category_id: number
    contact_name: string
    contact_phone: string
    contact_email: string
    price: number
    description: string
    created_at: ColumnType<Date, string | undefined, never>
    updated_at: ColumnType<Date, string | undefined, never>
}

export interface SuburbTable{
    id: Generated<number>
    name: string
    postcode: string
}

export type Category = Selectable<CategoryTable>
export type NewCategory = Insertable<CategoryTable>
export type CategoryUpdate = Updateable<CategoryTable>

export type Job = Selectable<JobTable>
export type NewJob = Insertable<JobTable>
export type JobUpdate = Updateable<JobTable>

export type Suburb = Selectable<SuburbTable>
export type NewSuburb = Insertable<SuburbTable>
export type SuburbUpdate = Updateable<SuburbTable>