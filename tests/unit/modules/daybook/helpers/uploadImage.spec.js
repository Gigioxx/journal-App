import cloudinary from 'cloudinary'
import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

cloudinary.config({
    cloud_name: 'dqrdhv5kw',
    api_key: '642714912156983',
    api_secret: '8QiSmD80X_3HCJFkmUZ51vYSr0Y'
})

describe('Pruebas en el uploadImage', () => {

    test('Debe de cargar un archivo y retornar el URL', async( done ) => {

        const { data } = await axios.get('https://res.cloudinary.com/dqrdhv5kw/image/upload/v1642800652/pvwlpylioth6v99gmnh6.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')

        //Tomar el ID
        const segments = url.split('/')

        const imageId = segments[ segments.length - 1 ].replace('.jpg', '')
        
        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done()
        })

    })

})