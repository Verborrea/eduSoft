export const hostname = 'https://edusoft.pockethost.io'

export function generateTimestampID() {
	return 'id-' + Date.now();
}

export const rol_router = {
	teacher: 'p',
	admin: 'admin',
	student: '_'
}

export async function convertImageToAvif(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();
        
        // Cargar el archivo como una URL de datos
        reader.onload = (event) => {
            img.src = event.target?.result as string;
        };
        
        // Cuando la imagen está cargada
        img.onload = () => {
            // Crear un canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            if (!ctx) {
                reject(new Error('Failed to get canvas context'));
                return;
            }
            
            // Ajustar el tamaño del canvas a la imagen
            canvas.width = img.width;
            canvas.height = img.height;
            // Dibujar la imagen en el canvas
            ctx.drawImage(img, 0, 0);
            
            // Convertir el contenido del canvas a un blob en formato AVIF
            canvas.toBlob((blob) => {
                if (blob) {
                    // Crear un nuevo archivo con el blob y el nombre original modificado
                    resolve(new File([blob], file.name.replace(/\.\w+$/, '.avif'), { type: 'image/avif' }));
                } else {
                    reject(new Error('Conversion to AVIF failed'));
                }
            }, 'image/avif', 0.5);
        };
        
        // Leer el archivo como una URL de datos
        reader.readAsDataURL(file);
    });
}