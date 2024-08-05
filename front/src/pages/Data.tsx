import TableauDashboard from "../components/TableauDashboard";
import TableauDashboardMobile from "../components/TableauDashboardMobile";
import Container from "../layout/Container";

export default function Data() {
  return (
    <Container>
      <div className="hidden lg:flex">
        <TableauDashboard />
      </div>
      <div className="flex lg:hidden">
        <TableauDashboardMobile />
      </div>
    </Container>
  )
}