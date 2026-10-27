import { Projects } from '../../constants/ProjectsDatas'
import ProjectChild from './ProjectChild'

function Projectparent() {
    return (

        <>
            <h1 className='pt-25 text-center uppercase text-xl font-bold text-green-400'>My Projects</h1>
            <div className='grid grid-cols-2 text-center border border-gray-600 m-5 p-4 '>


                {
                    Projects.map((proj) => (
                        <ProjectChild
                            key={proj.id}
                            image={proj.img}
                            title={proj.title}
                            desc={proj.description}
                            url={proj.url}
                            button={proj.button}

                        />

                    ))
                }
            </div>
        </>


    )
}

export default Projectparent