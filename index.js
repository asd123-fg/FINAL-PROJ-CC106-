import { supabase } from './lib/supabase.js'

async function testConnection() {
  const { data, error } = await supabase
    .from('products')
    .select('*')

  if (error) {
    console.error('ERROR:', error)
  } else {
    console.log('SUCCESS:', data)
  }
}

testConnection()