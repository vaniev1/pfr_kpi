type HeaderProps = {
    activeTab: 'overview' | 'manage'
    onTabChange: (tab: 'overview' | 'manage') => void
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
    const curator = 'Ваниев А. В.'

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '70px',
                background: 'rgba(15, 23, 42, 0.94)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #334155',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.35)'
            }}
        >
            {/* Левая часть — можно логотип или название системы */}
            <div style={{ flex: 1 }} />

            {/* Центр — вкладки */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    background: 'rgba(30, 41, 59, 0.5)',
                    padding: '0.4rem 1.2rem',
                    borderRadius: '12px'
                }}
            >
                <button
                    onClick={() => onTabChange('overview')}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '0.5rem 1.2rem',
                        color: activeTab === 'overview' ? '#60a5fa' : '#94a3b8',
                        fontSize: '1.05rem',
                        fontWeight: activeTab === 'overview' ? 600 : 500,
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'all 0.18s'
                    }}
                >
                    Обзор
                </button>

                <button
                    onClick={() => onTabChange('manage')}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '0.5rem 1.2rem',
                        color: activeTab === 'manage' ? '#60a5fa' : '#94a3b8',
                        fontSize: '1.05rem',
                        fontWeight: activeTab === 'manage' ? 600 : 500,
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'all 0.18s'
                    }}
                >
                    Управление KPI
                </button>
            </div>

            {/* Правая часть — имя + кнопка выхода */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.8rem',
                    flex: 1,
                    justifyContent: 'flex-end'
                }}
            >
                <div
                    style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#94a3b8'
                    }}
                >
                    {curator}
                </div>

                <button
                    onClick={() => alert('Выход')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.95rem',
                        transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ marginRight: '8px' }}>
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Выход
                </button>
            </div>
        </header>
    )
}