import Filters from '../components/Filters'
import KpiCards from '../components/KpiCards'
import DepartmentRanking from '../components/DepartmentRanking'
import { mockMetrics, mockDepartmentRanking } from '../data/mockData'

export default function OverviewPage() {
    return (
        <>
            <Filters />
            <DepartmentRanking departments={mockDepartmentRanking} />
            <KpiCards metrics={mockMetrics} />
        </>
    )
}