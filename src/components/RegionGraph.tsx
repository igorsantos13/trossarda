'use client'
import React from 'react'
import { BarChart, CartesianGrid, XAxis, Bar } from 'recharts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'

interface RegionGraphProps {
  chartData: { state: string; percentage: number; }[]
  chartConfig: {}
}

function RegionGraph({chartData, chartConfig} : RegionGraphProps) {
  return (
    <div className=' '>
          <Card className='flex w-[400px] md:w-[600px] md:h-[400px] text-slate-200  border-none  flex-col items-center justify-center bg-primary'>
            <CardHeader className='items-center pb-0'>
              <CardTitle>Localização de público</CardTitle>
              <CardDescription>Dados em %</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center pb-0">
              {/* region graph */}
              <div className='w-full'>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full bg-slate-50 rounded-md p-4">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                  dataKey="state"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  // tickFormatter={(value) => value.slice(0, 3)}
                />
                  <ChartTooltip content={<ChartTooltipContent hideLabel/>} />
                  
                  <Bar dataKey="percentage" fill="#ec9320" radius={4} />
                </BarChart>
              </ChartContainer>

              </div>
              
            </CardContent>
          </Card>
        </div>
  )
}

export default RegionGraph