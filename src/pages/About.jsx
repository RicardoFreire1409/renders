import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Loader2 } from 'lucide-react';

const API_KEY = import.meta.env.VITE_GDRIVE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GDRIVE_FOLDER_ID;

const buildQuery = (folderId) =>
  encodeURIComponent(`'${folderId}' in parents and trashed = false`);

const API_URL = (folderId) =>
  `https://www.googleapis.com/drive/v3/files?q=${buildQuery(folderId)}&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,thumbnailLink,imageMediaMetadata,videoMediaMetadata)&pageSize=200`;

const isImage = (m) => m.startsWith('image/');
const isVideo = (m) => m.startsWith('video/');

// Utilidades de URL para mostrar los archivos
const imgSrc = (id) => `https://drive.google.com/uc?export=view&id=${id}`;
const videoEmbed = (id) => `https://drive.google.com/file/d/${id}/preview`;
const thumbSrc = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

export default function About() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setErr('');
        const res = await fetch(API_URL(FOLDER_ID));
        if (!res.ok) throw new Error(`Drive API status ${res.status}`);
        const data = await res.json();
        // orden opcional: imágenes primero, luego videos, por nombre
        const files = (data.files || []).sort((a, b) => a.name.localeCompare(b.name));
        setItems(files);
      } catch (e) {
        setErr(e.message || 'Error cargando archivos de Drive');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Estudio Altamar</title>
        <meta
          name="description"
          content="Conoce nuestro equipo y mira fotos y videos reales del estudio: sesiones, equipo y momentos detrás de cámaras."
        />
      </Helmet>

      <div className="pt-16 transition-colors">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white"
            >
              Sobre <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">Nosotros</span>
            </motion.h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-gray-300">
              Un vistazo real a nuestro espacio y a las sesiones que vivimos a diario.
            </p>
          </div>
        </section>

        {/* Galería */}
        <section className="py-14 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading && (
              <div className="flex items-center justify-center py-14 text-slate-600 dark:text-gray-300">
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Cargando medios…
              </div>
            )}

            {err && (
              <div className="max-w-2xl mx-auto mb-8 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300">
                No se pudo cargar la carpeta de Drive: {err}
              </div>
            )}

            {!loading && !err && (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-12 text-slate-600 dark:text-gray-400">
                    No hay archivos públicos en la carpeta.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((f) => (
                      <motion.article
                        key={f.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden border bg-white border-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border-teal-500/20"
                      >
                        {/* Media */}
                        <div className="relative">
                          {isImage(f.mimeType) ? (
                            <img
                              src={thumbSrc(f.id)}
                              alt={f.name}
                              loading="lazy"
                              className="w-full h-64 object-cover"
                              onError={(e) => {
                                // fallback si no hay thumbnail
                                e.currentTarget.src = imgSrc(f.id);
                              }}
                            />
                          ) : isVideo(f.mimeType) ? (
                            <div className="w-full aspect-video">
                              <iframe
                                src={videoEmbed(f.id)}
                                title={f.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              />
                            </div>
                          ) : (
                            <div className="h-64 flex items-center justify-center text-slate-500 dark:text-gray-400">
                              <ImageIcon className="h-8 w-8" />
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold truncate text-slate-900 dark:text-white">{f.name}</h3>
                            {isVideo(f.mimeType) ? (
                              <span className="text-xs px-2 py-1 rounded-full bg-teal-600/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300 flex items-center">
                                <Video className="h-3 w-3 mr-1" />
                                Video
                              </span>
                            ) : isImage(f.mimeType) ? (
                              <span className="text-xs px-2 py-1 rounded-full bg-teal-600/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300">
                                Foto
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
