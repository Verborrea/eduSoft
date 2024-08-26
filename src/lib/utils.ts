export const hostname = 'https://edusoft.pockethost.io'

export function generateTimestampID(): string {
	return Date.now().toString();
}

export const rol_router = {
	teacher: 'p',
	admin: 'admin',
	student: '_'
}

export async function convertImageToWebp(file: File, unit: string, theme: string): Promise<File> {
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
            
            // Convertir el contenido del canvas a un blob en formato WEBP
            canvas.toBlob((blob) => {
                if (blob) {
                    // Crear un nuevo archivo con el blob y el nombre original modificado
                    resolve(new File([blob], `${unit}_${theme}_${generateTimestampID()}.webp`, { type: 'image/webp' }));
                } else {
                    reject(new Error('Conversion to WEBP failed'));
                }
            }, 'image/webp', 0.75);
        };
        
        // Leer el archivo como una URL de datos
        reader.readAsDataURL(file);
    });
}

export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}

export function formDataToObject(formData: FormData) {
    const obj: any = {};
    
    formData.forEach((value, key) => {
      // Check if the key already exists in the object
      if (obj[key]) {
        // If it exists and is not an array, convert it to an array
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value); // Push the new value to the array
      } else {
        obj[key] = value; // Otherwise, just set the value
      }
    });
    
    return obj;
  }