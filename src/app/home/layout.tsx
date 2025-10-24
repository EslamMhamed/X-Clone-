import Leftsidebar from "../../../components/Leftsidebar"
import RightSidebar from "../../../components/RightSidebar"
import QueryProviders from "../../../providers/QueryProviders"



type LayoutProps = {
    children: React.ReactNode
}

function layout({children}: LayoutProps ) {
  return (
    <>
      <QueryProviders>
          <Leftsidebar />
          <div className="mr-2 md:mr-10 xl:mr-110 lg:ml-100 ml-12 min-h-screen border border-border  mb-20">
          {children}
          </div>
          <RightSidebar />
      </QueryProviders>
    </>
  )
}

export default layout