import Container from "components/container";
import JobItemContent from "components/jobItemContent";
import JobListSearch from "components/jobListSearch";
import PaginationControls from "components/paginationControls";
import ResultsCount from "components/resultsCount";
import Sidebar, { SidebarTop } from "components/sidebar";
import Sorting from "components/sortingControls";

export default function Home() {
  return (
    <>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <Sorting />
          </SidebarTop>
          <JobListSearch />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>   
    </>
  );
}
