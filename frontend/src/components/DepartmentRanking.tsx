type Department = {
    name: string
    score: number
    trend: 'up' | 'down' | 'stable'
}

type DepartmentRankingProps = {
    departments: Department[]
}

export default function DepartmentRanking({ departments }: DepartmentRankingProps) {
    return (
        <div
            style={{
                background: 'rgba(30, 41, 59, 0.94)',
                borderRadius: '16px',
                padding: '1.75rem 2rem',
                boxShadow: '0 6px 22px rgba(0,0,0,0.28)',
                border: '1px solid #334155'
            }}
        >
            <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.4rem', fontWeight: 600, color: '#60a5fa' }}>
                Рейтинг отделов по общему итогу
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {departments.map((dep, idx) => (
                    <div
                        key={dep.name}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: idx === 0 ? 'rgba(34, 197, 94, 0.12)' : 'transparent',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{ width: '32px', textAlign: 'center', fontSize: '1.1rem', fontWeight: 700, color: '#94a3b8' }}>
                            {idx + 1}
                        </div>

                        <div style={{ flex: 1, fontSize: '1.05rem', fontWeight: 500 }}>
                            {dep.name}
                        </div>

                        <div style={{ width: '220px', height: '10px', background: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                            <div
                                style={{
                                    height: '100%',
                                    width: `${dep.score}%`,
                                    background: dep.score >= 80 ? '#22c55e' : dep.score >= 70 ? '#eab308' : '#ef4444',
                                    transition: 'width 0.6s ease'
                                }}
                            />
                        </div>

                        <div style={{ width: '70px', textAlign: 'right', fontSize: '1.15rem', fontWeight: 700, color: '#e2e8f0' }}>
                            {dep.score}
                        </div>

                        <div style={{ width: '24px', color: dep.trend === 'up' ? '#22c55e' : dep.trend === 'down' ? '#ef4444' : '#94a3b8' }}>
                            {dep.trend === 'up' ? '↑' : dep.trend === 'down' ? '↓' : '→'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}