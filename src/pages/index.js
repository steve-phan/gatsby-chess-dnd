import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
const hello = () => {
  console.log('hello')
}

const IndexPage = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', hello)
    return () => {
      window.removeEventListener('scroll', hello)
    }
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
        // backgroundColor="red"
      />
      <p>
        <Link to="/chess">Chess Game</Link>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          temporibus nobis quos cum distinctio nam sunt autem dignissimos
          dolores magni, excepturi dicta optio minima incidunt maxime reiciendis
          ea quisquam veritatis quis ipsum harum ratione voluptatibus?
          Recusandae excepturi eaque officia. Placeat cumque sed maiores? Non
          cupiditate rem rerum illo doloribus, numquam corrupti eaque laudantium
          debitis earum pariatur a recusandae architecto soluta quo voluptas
          reiciendis, voluptates veritatis consequatur nulla ipsam modi labore.
          Obcaecati omnis maiores voluptate, distinctio eaque illum incidunt
          atque, adipisci praesentium doloremque ducimus necessitatibus libero
          iure cumque! Odio veritatis dolorum assumenda facere dicta odit?
          Pariatur ea officia, minima autem illo exercitationem quam voluptatem
          at nostrum quo consectetur eius incidunt ullam perspiciatis
          blanditiis. Quaerat, deserunt distinctio! Amet, enim dignissimos
          repellendus assumenda tenetur quaerat temporibus natus, doloribus
          quisquam deserunt vitae quia sapiente maiores veritatis voluptatum
          consequatur ab corrupti aspernatur quis asperiores perferendis. Veniam
          dolores in reprehenderit? Aperiam ea aspernatur voluptatem,
          repudiandae cupiditate nam quos quia eos. Ad a, distinctio eos
          incidunt odit earum eligendi, inventore magnam temporibus ipsum saepe
          similique provident labore ipsa corrupti recusandae aut, quaerat
          blanditiis accusamus quis. Expedita possimus minima dignissimos dicta
          commodi soluta nisi corporis eum. Beatae obcaecati nesciunt dolorem
          voluptates, mollitia earum odio aut, minima reprehenderit impedit
          delectus sint, culpa officiis veritatis debitis laudantium eum
          dignissimos! Est perspiciatis consectetur porro eos ad aliquam
          voluptas vero officiis error, facere animi officia optio neque. Neque,
          nam? Minus, nam? Pariatur nostrum tempore praesentium commodi
          exercitationem. Dignissimos, facere laborum aliquam vitae cumque est
          delectus quidem doloribus nobis perspiciatis rerum modi, quo
          temporibus, vel provident? A nulla debitis officiis suscipit sunt odit
          doloribus harum dicta cumque laudantium adipisci ad quibusdam
          repellendus eligendi exercitationem quaerat dolor, animi vel
          reprehenderit maiores ab consequuntur, quidem soluta voluptates?
          Expedita, nostrum, autem, itaque quasi eaque eveniet quod beatae ut
          vitae sed totam veniam aspernatur odit. Cupiditate impedit rem,
          officia corrupti, corporis ea voluptate voluptas consequuntur
          necessitatibus dignissimos libero dicta accusantium. Asperiores et
          perferendis corrupti consectetur adipisci vitae quidem voluptates
          quaerat dolorum. Molestias maiores doloribus labore? Repudiandae minus
          quaerat praesentium odio ex animi ipsum enim inventore dolorum,
          ratione similique eaque? Non laudantium exercitationem quasi
          distinctio modi. Adipisci vitae molestiae a tempore dolor? Libero at
          beatae itaque laborum pariatur aliquid deserunt, ab soluta ex
          molestiae sequi ratione. Facilis error perspiciatis accusamus? In a
          quas libero, ea quod corrupti eligendi dicta consequatur? Repudiandae,
          consequuntur ratione omnis voluptatum officiis incidunt veritatis
          beatae qui ducimus, consectetur, sed quisquam quos suscipit doloremque
          impedit! Sunt, maiores nemo quibusdam ipsam amet molestiae ducimus,
          ipsa mollitia ex accusantium ea corporis rem. Voluptatum earum quam
          labore veritatis delectus quisquam illo voluptates autem officiis
          sapiente, maiores dolor laudantium, ducimus quibusdam praesentium?
          Velit vel neque nostrum unde voluptatem magnam veritatis vero adipisci
          praesentium, obcaecati eum eveniet libero sint itaque earum eligendi
          veniam non. Delectus pariatur in illo mollitia perspiciatis maxime?
          Est enim quaerat numquam error dolor neque deleniti asperiores veniam
          aliquam vero tenetur cumque recusandae, hic sit amet fugit incidunt
          aspernatur ducimus, eligendi debitis animi repellat? Porro sequi sint
          rem eius ipsa culpa, iure tenetur deleniti ullam dolor. Animi sed
          consequuntur iure, libero deleniti officiis dignissimos culpa natus
          est voluptatum odit fugit. Optio amet esse quia possimus blanditiis
          repudiandae consectetur rem minima unde illum asperiores dolore, harum
          quas labore consequatur reprehenderit iste quo. Illo harum tenetur,
          iusto, ea sapiente nam amet labore accusamus quod neque odit nostrum
          beatae. Alias expedita repellat tempora similique debitis molestias
          vitae in id maxime deleniti sapiente nesciunt nihil eligendi odio quam
          totam labore vero delectus provident, nobis, optio possimus quidem nam
          dolorum? Minus vitae quaerat nesciunt, ullam laudantium expedita
          magnam, inventore et at possimus nisi, illum corrupti quos provident
          sequi fuga molestias dolore officiis eveniet tempora! Tempore in
          quaerat nam quis quisquam ea reprehenderit magni delectus eligendi
          animi. Sapiente, corporis ducimus! Fugiat consectetur nemo error
          explicabo ex consequuntur placeat quae! Minima id enim, dignissimos
          delectus, explicabo vel iusto ea voluptatem quas non aspernatur saepe
          consectetur veniam vitae nulla eveniet tenetur, repellat incidunt ab
          doloremque repellendus. Consequuntur totam dolor, non odit porro ea
          fugiat eaque labore suscipit officiis vero laudantium necessitatibus
          aliquid placeat odio sint, quia esse, hic et temporibus minima?
          Nesciunt praesentium dolorem possimus rem sapiente similique nostrum,
          distinctio error numquam voluptates nihil voluptatibus voluptatem amet
          cupiditate optio debitis aliquam libero fugit perferendis ut inventore
          illum? Modi recusandae cumque perspiciatis delectus iusto velit vero
          necessitatibus inventore repellat voluptate, non maiores ad
          praesentium quaerat eveniet quos. Fugit ab amet vel nesciunt neque
          necessitatibus cupiditate, id ducimus adipisci voluptatibus ratione
          dolorum consequuntur maiores numquam laudantium soluta quidem odit
          facilis commodi animi similique pariatur! Perspiciatis mollitia,
          quibusdam dicta aperiam perferendis quam dolor? Rem quae unde culpa
          sint cupiditate aspernatur odio. A similique maxime ipsum quae
          doloremque debitis adipisci culpa nihil ratione saepe quisquam
          excepturi molestiae iure laboriosam vero labore magni maiores,
          provident sit, nulla nostrum aliquid mollitia! Fugiat cupiditate
          aliquid animi. Repellat dignissimos aspernatur itaque ea, id rerum,
          ratione nostrum nobis accusantium nihil at architecto deserunt, amet
          voluptatem voluptatibus possimus minus iste ipsa vitae delectus ab
          sapiente! Facilis quia sunt pariatur fugit explicabo ipsa veniam at
          voluptates asperiores, officia tempore impedit amet eligendi natus
          officiis sapiente. Hic fugiat animi odio impedit fugit! Voluptas
          laborum excepturi repudiandae non illo? Debitis sequi veritatis sit
          ullam totam iusto repellendus nam praesentium sunt repudiandae et ipsa
          numquam libero ratione doloribus, aperiam officia nobis reprehenderit
          quia obcaecati molestiae eligendi ad eveniet sint. Ut, eaque quae.
          Voluptas placeat quia modi saepe quas exercitationem possimus veniam,
          voluptatibus vero ea itaque eius alias corporis repellendus pariatur
          ut, a deleniti recusandae eum laborum! Accusamus dolorum nam, vitae
          magnam architecto quo asperiores autem, laudantium reprehenderit saepe
          est ipsa quam exercitationem tempora enim ut dolores, soluta non unde
          cumque nulla dolor. Explicabo laboriosam eos eum rerum sequi omnis
          quibusdam sunt qui consectetur ducimus veritatis, architecto itaque
          provident dicta officia fuga accusantium delectus placeat corporis.
          Quod amet pariatur unde, et hic ex quas asperiores dicta dolorem
          accusantium accusamus perferendis vel! Nihil, voluptatum ut et magnam,
          nisi deleniti dignissimos numquam, impedit consequatur voluptatibus
          ipsam cum in nulla ea placeat eaque quia beatae maxime ipsum quis
          consequuntur porro harum cupiditate accusamus? Non, a mollitia. Vitae
          cumque expedita at quibusdam quae eos ipsa consequatur sapiente
          maiores illo iure excepturi, fuga repellendus vero accusamus iste
          numquam voluptate sed ut. Porro hic voluptatem placeat ipsa aut!
          Magnam perferendis fugiat ab repudiandae minima praesentium unde rem
          explicabo, quaerat accusantium recusandae mollitia necessitatibus,
          cupiditate sapiente quod facere. Quis est cupiditate voluptate
          blanditiis praesentium omnis inventore. Ipsam excepturi adipisci
          architecto magni soluta voluptates. Officiis error, autem iste optio
          possimus adipisci veritatis eum ipsa esse laudantium sint explicabo
          fugiat quas et praesentium corrupti repudiandae voluptatem animi,
          quisquam nisi perferendis illum omnis. Provident facere voluptates et
          labore cum porro unde illo obcaecati quidem ea, sequi id eum voluptas
          quasi corporis, repellat doloremque officiis, neque est! Maxime
          nesciunt dolorum, obcaecati quo magni hic corrupti eligendi ex
          doloribus doloremque, amet odit a similique fugit suscipit saepe porro
          quos accusamus, quam tempore inventore tenetur? Atque omnis optio
          temporibus odit quisquam nemo nostrum reprehenderit aut ipsum, tempore
          blanditiis eaque inventore rerum dolore facilis cumque, similique
          provident corporis aspernatur quos repellat molestias, facere nihil
          non. Id cupiditate minima vitae numquam eveniet illum fugiat at, nam
          facilis vel repellat molestias similique rerum enim officia! Quia
          itaque vero molestiae ex, minima hic numquam voluptatibus! Dolor,
          repellendus.
        </span>
      </p>
    </Layout>
  )
}

export default IndexPage
