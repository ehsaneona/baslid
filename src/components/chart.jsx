// eslint-disable-next-line import/no-extraneous-dependencies
import { ResponsiveBar } from '@nivo/bar';

function Chart({ data }) {
    return (
        <ResponsiveBar
            data={data}
            keys={['hot dog']}
            indexBy="country"
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            padding={0.8}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'yellow_orange_brown' }}
            borderRadius={4}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            legends={[]}
            role="application"
            barAriaLabel={e =>
                e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
            }
            theme={{
                fontSize: 14,
                axis: {
                    domain: {
                        line: {
                            stroke: '#777777',
                            strokeWidth: 1,
                        },
                    },
                    legend: {
                        text: {
                            fontSize: 12,
                            fill: 'white',
                        },
                    },
                    ticks: {
                        line: {
                            stroke: '#777777',
                            strokeWidth: 1,
                        },
                        text: {
                            fontSize: 11,
                            fill: 'white',
                        },
                    },
                },
                grid: {
                    line: {
                        stroke: '#F1F1F1',
                        strokeWidth: 1,
                    },
                },
                legends: {
                    title: {
                        text: {
                            fontSize: 11,
                            fill: '#333333',
                        },
                    },
                    text: {
                        fontSize: 11,
                        fill: '#333333',
                    },
                    ticks: {
                        line: {},
                        text: {
                            fontSize: 10,
                            fill: '#333333',
                        },
                    },
                },
                annotations: {
                    text: {
                        fontSize: 13,
                        fill: '#333333',
                        outlineWidth: 2,
                        outlineColor: '#ffffff',
                        outlineOpacity: 1,
                    },
                    link: {
                        stroke: '#000000',
                        strokeWidth: 1,
                        outlineWidth: 2,
                        outlineColor: '#ffffff',
                        outlineOpacity: 1,
                    },
                    outline: {
                        stroke: '#000000',
                        strokeWidth: 2,
                        outlineWidth: 2,
                        outlineColor: '#ffffff',
                        outlineOpacity: 1,
                    },
                    symbol: {
                        fill: '#000000',
                        outlineWidth: 2,
                        outlineColor: '#ffffff',
                        outlineOpacity: 1,
                    },
                },
                tooltip: {
                    container: {
                        background: '#ffffff',
                        color: '#000',
                        fontSize: 12,
                    },
                    basic: {},
                    chip: {},
                    table: {},
                    tableCell: {},
                    tableCellValue: {},
                },
            }}
        />
    );
}

export default Chart;
