import { supabase } from "../client"
import { ITheme, IThemeList } from './types';

export const fetchThemes = async () => {
  const { data, error } = await supabase.from('grammar').select(('id, name'));

  if (error) {
    console.log(error);
    return [] as IThemeList[];
  } else {
    return data as IThemeList[];
  }
}

export const fetchTheme = async (id: number) => {
  const { data, error } = await supabase.from('grammar').select('*').eq('id', id).single();

  if (error) {
    console.log('error', error);
    return null;
  } else {
    return data as ITheme;
  }
};