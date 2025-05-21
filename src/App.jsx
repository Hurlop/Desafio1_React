import './App.css'
import { CuatroTiempos } from './components/cuatroTiempos'
import { DosTiempos } from './components/DosTiempos'
import { MyButton } from './components/MyButton'
export function App() {
  //variables
  let cantidad = [
    {id:1, cilindro: "1 Cilindro", moto: "Mt-15", img:"https://scontent-bog2-1.xx.fbcdn.net/v/t45.5328-4/426628471_798730508958250_5938803328536349850_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=2piphfJddycQ7kNvwG-rpfE&_nc_oc=AdmgZi8uzM8bXaEzTYtTyioVSaTO564rp8TmuQ3S85K6vu82Gqj-qg5NhzFNjp9yZEE&_nc_zt=23&_nc_ht=scontent-bog2-1.xx&_nc_gid=7seHYG_AZT8IuJaXaDCzoA&oh=00_AfKQme3i-7HcM_nCFXtzDE4AV3EmarYEqtOulQezjLeVnw&oe=6830159A", sound: "/one_cilinder.wav"},
    {id:2, cilindro: "2 Cilindros", moto: "Mt-03", img:"https://f.fcdn.app/imgs/40349d/bikeup.uy/bikeuy/895b/original/catalogo/YAMMT03_AZ_3/2000-2000/yamaha-mt03-azul.jpg", sound: "/two_cylinders.wav"},
    {id:3, cilindro: "3 Cilindros", moto: "Mt-09", img:"https://res.cloudinary.com/twisted-road/image/upload/c_fill,g_auto,h_600,w_900,q_auto,f_auto/v1712017963/twisted_api/production/vehicles/szuin86jmsk57qigopus.jpg", sound: "/three_cylinders.wav"},
    {id:4, cilindro: "4 Cilindros", moto: "Mt-10", img:"https://media.sw-motech.us/products/images/gpt_06_546_60100_b_2_xl.jpg", sound: "/four_cylinders.wav"},
  ]
  //condicionales

  //funciones
  
  return (
    <>
    <div className='container'>
      <h1>Tipos de Motores (En Motos):</h1>
      <div className='cajaInterna'>
        <section className='infoGeneral'>
          <h2>Motores de 2 Tiempos y 4 Tiempos:</h2>
          <h3>Motores 2 Tiempos:</h3>
          <p>Al motor de dos tiempos se le conoce también como motor de ciclo de Otto, debido al nombre de la persona encargada de su diseño y fabricación, el ingeniero alemán Nicolaus August Otto. Consiste en un motor de combustión interna que tiene la capacidad para realizar las cuatro fases de un ciclo termodinámico (admisión, compresión, explosión y escape) en únicamente dos movimientos lineales del pistón, de subida y de bajada, produciendo una explosión con cada vuelta que el pistón da al cigüeñal. Por lo general un motor de dos tiempos tiene un precio más económico, pero también hay que decir que son menos ecológicos que los motores de cuatro tiempos. Esto hace que los motores de 2 tiempos cada vez sean menos habituales, estando presentes básicamente en ciclomotores de potencia reducida y en motos de enduro o motocross.</p>
          <DosTiempos/>
          <h3>De 4 Tiempos:</h3>
          <p>Se define como motor de 4 tiempos a los motores que para completar un ciclo de trabajo lo hacen en 4 fases claramente separadas. Normalmente se habla de motores de 4 tiempos referidos a motores de combustión interna y sus 4 fases son: admisión, compresión, explosión y escape. Estas cuatro fases completan un ciclo de trabajo y se efectúan en tiempos diferentes durante el funcionamiento del mismo. Esta es la diferencia básica frente a los motores de 2 tiempos, que realizan dos de las fases de manera simultánea. Debido a que cada fase se realiza en un momento separado, cada cilindro de un motor de 4 tiempos necesita hacer 2 movimientos de ascenso y descenso para completar el ciclo. Dependiendo del ciclo termodinámico que realicen, los motores de 4 tiempos pueden ser de ciclo Diésel, Otto o Atkinson.</p>
          <CuatroTiempos/>
        </section>
        <section>
          <h2>Cantidad de Cilindros:</h2>
          <div className='infoMotores'>
            {
            cantidad.map((cantidad) => (
              <h2 key={cantidad.id}>{cantidad.cilindro}</h2>,
              <h3 key={cantidad.id}>{cantidad.moto}</h3>,
              <div key={cantidad.id} className='imagenSonido'>
                <img className="imagen" src={cantidad.img} alt={cantidad.moto}/>
                <MyButton  func1={cantidad.sound} text={cantidad.cilindro}/>
              </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
