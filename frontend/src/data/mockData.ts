export const quarters = [
    'Кв1 2026',
    'Кв1 2025',
    'Кв2 2025',
    'Кв3 2025',
    'Кв4 2025',
] as const;

export const departments = [
    'Все отделы',
    'ИТ',
    'Отдел обращений',
    'Управление Перс Учета',
    'Отдел вып. застрахованных гражданам',
    'Отдел ТСР',
    'Управление ЕКЦ',
] as const;

export type Quarter = typeof quarters[number];
export type DepartmentName = typeof departments[number];

export type MetricType = 'donut' | 'linear' | 'linear-reverse';

export interface Metric {
    id: number;
    title: string;
    current: number;
    target: number;
    unit: string;
    type: MetricType;
    color: string;
    sparkline: number[];
    delta: number;
}

export const mockMetrics: Metric[] = [
    { id: 1, title: 'К',   current: 80.82, target: 98,   unit: '%',     type: 'donut',         color: '#3b82f6', sparkline: [78, 81, 82.5, 80.82, 79.5],   delta: -1.2 },
    { id: 2, title: 'Кн',  current: 92.5,  target: 98,   unit: '%',     type: 'donut',         color: '#60a5fa', sparkline: [88, 90, 91.2, 92.5, 93.1],    delta: +0.8 },
    { id: 3, title: 'ДВГ', current: 45,    target: 30,   unit: 'мин',   type: 'linear-reverse',color: '#ef4444', sparkline: [42, 40, 39, 45, 43],       delta: +3.1 },
    { id: 4, title: 'Общий итог', current: 68, target: 75, unit: 'баллов', type: 'linear',     color: '#8b5cf6', sparkline: [70, 71, 70.5, 68, 69.2], delta: -1.4 },
];

export type Trend = 'up' | 'down' | 'stable';

export interface DepartmentRankingItem {
    name: string;
    score: number;
    trend: Trend;
}

export const mockDepartmentRanking: DepartmentRankingItem[] = [
    { name: 'ИТ',                                score: 84, trend: 'up'     },
    { name: 'Управление ЕКЦ',                    score: 79, trend: 'up'     },
    { name: 'Отдел обращений',                   score: 76, trend: 'stable' },
    { name: 'Отдел ТСР',                         score: 71, trend: 'down'   },
    { name: 'Управление Перс Учета',             score: 68, trend: 'stable' },
    { name: 'Отдел вып. застрахованных гражданам', score: 64, trend: 'down'   },
];