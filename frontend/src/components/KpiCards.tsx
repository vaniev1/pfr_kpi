import ReactECharts from 'echarts-for-react'

type Metric = {
    id: number
    title: string
    current: number
    target: number
    unit: string
    type: 'donut' | 'linear' | 'linear-reverse'
    color: string
    sparkline: number[]
    delta: number
}

type KpiCardsProps = {
    metrics: Metric[]
}

const getProgress = (m: Metric) => {
    if (m.type === 'linear-reverse') {
        const diff = m.target - m.current
        return Math.max(0, Math.min(100, (diff / m.target) * 100))
    }
    return Math.max(0, Math.min(100, (m.current / m.target) * 100))
}

const getStatusText = (percent: number) => {
    if (percent >= 95) return 'Отлично'
    if (percent >= 80) return 'Приемлемо'
    return 'Требует внимания'
}

const getDeltaColor = (delta: number) => (delta >= 0 ? '#22c55e' : '#ef4444')

const getSparklineOption = (data: number[], color: string) => ({
    grid: { top: 4, right: 0, bottom: 4, left: 0 },
    xAxis: { type: 'category', show: false },
    yAxis: { type: 'value', show: false },
    series: [{
        data,
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { color, width: 2.2 },
        areaStyle: { color: `${color}30`, opacity: 0.4 }
    }]
})

export default function KpiCards({ metrics }: KpiCardsProps) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {metrics.map(m => {
                const percent = getProgress(m)
                const statusColor = percent >= 90 ? '#22c55e' : percent >= 75 ? '#eab308' : '#ef4444'
                const deltaColor = getDeltaColor(m.delta)

                return (
                    <div
                        key={m.id}
                        style={{
                            background: 'rgba(30, 41, 59, 0.94)',
                            borderRadius: '16px',
                            padding: '1.5rem 1.75rem',
                            boxShadow: '0 6px 22px rgba(0,0,0,0.28)',
                            border: `1px solid ${m.color}20`,
                            transition: 'transform 0.18s ease, box-shadow 0.18s ease'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)'
                            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.28)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: m.color }}>
                                {m.title}
                            </h3>
                            <div style={{ fontSize: '0.92rem', color: deltaColor, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                {m.delta >= 0 ? '↑' : '↓'} {Math.abs(m.delta)}%
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.25rem' }}>
                            {m.type.includes('donut') ? (
                                <div style={{ position: 'relative', width: '110px', height: '110px', flexShrink: 0 }}>
                                    <svg viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
                                        <circle cx="60" cy="60" r="52" fill="none" stroke="#1e293b" strokeWidth="16" />
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="52"
                                            fill="none"
                                            stroke={m.color}
                                            strokeWidth="16"
                                            strokeDasharray={`${percent * 3.27} 327`}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2.4rem',
                                            fontWeight: 800,
                                            color: '#e2e8f0',
                                            lineHeight: 1
                                        }}
                                    >
                                        {percent.toFixed(0)}
                                        <span style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '4px' }}>%</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '2.6rem', fontWeight: 800, color: m.color, marginBottom: '6px' }}>
                                        {m.current.toFixed(1)}{m.unit}
                                    </div>
                                    <div style={{ height: '12px', background: '#1e293b', borderRadius: '6px', overflow: 'hidden' }}>
                                        <div
                                            style={{
                                                height: '100%',
                                                width: `${percent}%`,
                                                background: `linear-gradient(90deg, ${m.color}90, ${m.color})`,
                                                transition: 'width 0.6s ease'
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            <div style={{ width: '100px', height: '60px', flexShrink: 0 }}>
                                {/* @ts-ignore */}
                                <ReactECharts
                                    option={getSparklineOption(m.sparkline, m.color)}
                                    style={{ height: '100%', width: '100%' }}
                                    notMerge={true}
                                    lazyUpdate={true}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#94a3b8' }}>
                            <span>Цель: {m.target}{m.unit}</span>
                            <span style={{ color: statusColor, fontWeight: 600 }}>
                {getStatusText(percent)}
              </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}