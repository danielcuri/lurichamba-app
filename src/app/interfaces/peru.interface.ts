export interface PeruResponse {
  respuesta: boolean;
  codigo: number;
  mensaje: string;
  publicaciones: Publicacion[];
  links: Link[];
  meta: Meta;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
  path: string;
  links: Link[];
}

export interface Publicacion {
  codigo_aleatorio: string;
  created_at: Date;
  descripcion: string;
  estado: string;
  estado_proceso_id: string;
  fecha_publicacion: Date;
  fecha_registrada: Date;
  id: number;
  nombres: string;
  persona_id: string;
  servicio_id: string;
  servicio_nombre: string;
  slug: string;
  tipo_servicio_id: string;
  updated_at: Date;
  user_id: null;
}
