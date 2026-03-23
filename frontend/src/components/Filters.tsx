import { useState } from 'react'
import CustomSelect from './CustomSelect'

const quarters = ['Кв1 2026', 'Кв1 2025', 'Кв2 2025', 'Кв3 2025', 'Кв4 2025']

const departments = [
    'Все отделы',
    'ИТ',
    'Отдел обращений',
    'Управление Перс Учета',
    'Отдел вып. застрахованных гражданам',
    'Отдел ТСР',
    'Управление ЕКЦ'
]

const curator = 'Ваниев А. В.'

export default function Filters() {
    const [activeQuarter, setActiveQuarter] = useState('Кв1 2026')
    const [activeDepartment, setActiveDepartment] = useState('Все отделы')

    return (
        <div
            style={{
                background: 'rgba(30, 41, 59, 0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '1.25rem 1.75rem',
                border: '1px solid #334155',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                position: 'relative',
                zIndex: 100
            }}
        >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                <CustomSelect
                    label="Отдел"
                    value={activeDepartment}
                    onChange={setActiveDepartment}
                    options={departments}
                />
                <CustomSelect
                    label="Квартал"
                    value={activeQuarter}
                    onChange={setActiveQuarter}
                    options={quarters}
                    width="160px"
                />
            </div>

            <div style={{ color: '#94a3b8', fontSize: '0.98rem', fontWeight: 500 }}>
                Куратор: <span style={{ color: '#e2e8f0' }}>{curator}</span>
            </div>
        </div>
    )
}