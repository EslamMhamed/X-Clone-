import Leftsidebar from "../../../components/Leftsidebar"

type LayoutProps = {
    children: React.ReactNode
}


function layout({children}: LayoutProps ) {
  return (
    <>
        <Leftsidebar />
        <div className="mr-2 md:mr-10 xl:mr-110 lg:ml-100 ml-12 min-h-screen border border-border  mb-20">
        </div>
        {children}
    </>
  )
}

export default layout