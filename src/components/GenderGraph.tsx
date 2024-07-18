'use client'

import React from 'react'
import { PieChart, Pie } from 'recharts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'
import { ResponsiveContainer } from 'recharts'

interface GenderGraphProps {
  pieChartConfig: {}
  pieChartData: {gender: string; percentage: number; fill: string}[]
}

function GenderGraph({pieChartConfig, pieChartData} : GenderGraphProps) {
  return (
    <div className='w-1/2 md:w-1/2 h-1/2'>
          <Card className="flex items-center justify-center flex-col bg-transparent text-slate-200 border-none size-[500px]">
            <CardHeader className="items-center pb-0">
              <CardTitle>Gender Distribuition</CardTitle>
              <CardDescription>Homem - Mulher </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center pb-0">
            <ResponsiveContainer>
              <ChartContainer
                config={pieChartConfig}
                className="mx-auto aspect-square min-h-[150px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={pieChartData}
                    dataKey="percentage"
                    nameKey="gender"
                    innerRadius={60}
                    strokeWidth={5}
                  >

                  </Pie>
                </PieChart>
              </ChartContainer>

            </ResponsiveContainer>
            </CardContent>
          {/* <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter> */}
          </Card>
        </div>
  )
}

export default GenderGraph