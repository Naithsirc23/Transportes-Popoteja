import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Lead = {
  id?: string
  nombre: string
  telefono: string
  email?: string
  tipo_mascota: string
  origen: string
  destino: string
  fecha_viaje?: string
  mensaje?: string
  estado?: string
  created_at?: string
}

export async function createLead(lead: Lead) {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()

  if (error) throw error
  return data
}
