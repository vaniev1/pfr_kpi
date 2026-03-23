import { useState } from 'react'

type CustomSelectProps = {
    label: string
    value: string
    onChange: (value: string) => void
    options: string[]
    width?: string
}

export default function CustomSelect({
                                         label,
                                         value,
                                         onChange,
                                         options,
                                         width = '190px'
                                     }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ position: 'relative', minWidth: width, zIndex: isOpen ? 9999 : 100 }}>
            <label
                style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.84rem',
                    color: '#94a3b8',
                    fontWeight: 500
                }}
            >
                {label}
            </label>

            <div
                onClick={() => setIsOpen(prev => !prev)}
                style={{
                    padding: '0.7rem 1rem',
                    background: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                    fontSize: '0.96rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s',
                    boxShadow: isOpen ? '0 0 0 3px rgba(96,165,250,0.3)' : 'none'
                }}
            >
                <span>{value}</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2.5"
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                    }}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>

            {isOpen && (
                <>
                    <div
                        style={{ position: 'fixed', inset: 0, zIndex: 9980 }}
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: '6px',
                            background: 'rgba(30,41,59,0.98)',
                            border: '1px solid #475569',
                            borderRadius: '12px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
                            zIndex: 9999,
                            maxHeight: '300px',
                            overflowY: 'auto'
                        }}
                    >
                        {options.map(opt => (
                            <div
                                key={opt}
                                onClick={() => {
                                    onChange(opt)
                                    setIsOpen(false)
                                }}
                                style={{
                                    padding: '0.75rem 1.25rem',
                                    cursor: 'pointer',
                                    color: opt === value ? '#60a5fa' : '#e2e8f0',
                                    background: opt === value ? 'rgba(59,130,246,0.18)' : 'transparent',
                                    transition: 'background 0.14s'
                                }}
                                onMouseEnter={e => {
                                    if (opt !== value) e.currentTarget.style.background = 'rgba(71,85,105,0.4)'
                                }}
                                onMouseLeave={e => {
                                    if (opt !== value) e.currentTarget.style.background = 'transparent'
                                }}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}