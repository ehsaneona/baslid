// eslint-disable-next-line import/no-extraneous-dependencies
import { ResponsiveBar } from '@nivo/bar';

function Chart({ data }) {
    return (
        <ResponsiveBar
            onMouseEnter={(_data, event) => {
                // eslint-disable-next-line no-param-reassign
                event.target.style.fill = '#F8CE52';
            }}
            onMouseLeave={(_data, event) => {
                // eslint-disable-next-line no-param-reassign
                event.target.style.fill = '#FFF7D3';
            }}
            data={data}
            keys={['earn']}
            indexBy="date"
            margin={{ top: 5, right: 0, bottom: 25, left: 30 }}
            padding={0.8}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={['#FFF7D3']}
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
            tooltip={d => (
                <div className="text-xs font-medium space-x-2.5 flex items-center">
                    <span className="inline-flex h-3.5 w-1 bg-black-900 rounded-[1px]" />
                    <span>${d.data.earn} Earnings</span>
                </div>
            )}
            theme={{
                fontSize: 14,
                axis: {
                    ticks: {
                        text: {
                            fontSize: 14,
                            fontWeight: 500,
                            fill: 'rgba(255, 255, 255, 0.4)',
                        },
                    },
                },
                grid: {
                    line: {
                        stroke: 'rgba(241, 241, 241, 0.1)',
                        strokeWidth: 1,
                    },
                },
                tooltip: {
                    container: {
                        background: '#ffffff',
                        color: '#000',
                        borderRadius: 9,
                        boxShadow: 'none',
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                },
            }}
        />
    );
}

export default Chart;
