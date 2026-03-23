export default function ManageKpiPage() {
    return (
        <div
            style={{
                background: 'rgba(30, 41, 59, 0.94)',
                borderRadius: '16px',
                padding: '3rem 2.5rem',
                textAlign: 'center',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem'
            }}
        >
            <h2 style={{ fontSize: '1.8rem', margin: 0, color: '#60a5fa' }}>
                Управление показателями KPI
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px' }}>
                Здесь будет таблица со всеми KPI, кнопки «Добавить показатель», «Редактировать», «Удалить» и т.д.
            </p>
            <button
                style={{
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '0.9rem 2rem',
                    borderRadius: '10px',
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    marginTop: '1rem'
                }}
                onClick={() => alert('Функция добавления KPI пока в разработке')}
            >
                + Добавить новый показатель
            </button>
        </div>
    )
}