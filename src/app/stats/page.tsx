'use client'
import React from 'react'
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from 'recharts'
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"

// CARD
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp } from 'lucide-react'


export default function Stats() {
// BAR CHART DATA
  const chartData = [
    { state: "São Paulo", percentage: 60},
    { state: "Minas Gerais", percentage: 25},
    { state: "Rio de Janeiro", percentage: 14},
    { state: "Exterior", percentage: 1},
  ]

  const chartConfig = {
    sp: {
      label: 'SP %',
      color: "#2563eb",
    },
    minas: {
      label: 'MG %',
      color: "#2563eb",
    },
    rio: {
      label: 'RJ %',
      color: "#2563eb",
    },
  } satisfies ChartConfig
  
// PIE CHART DATA
  const pieChartData = [
    {gender: 'male', percentage: 80, fill: '#ec9320'},
    {gender: 'female', percentage: 20, fill: '#000'},

  ]

  const pieChartConfig = {
    male: {
      label: 'male %',
      color: "#2563eb",

    },
    female: {
      label: 'female %',
      color: "#2563eb",

    }
  } satisfies ChartConfig

  return (
    <section className='w-full h-full flex-col items-center justify-center '>
      <h2 className='text-white text-center text-4xl md:text-5xl mb-5'>Quem me acompanha?</h2>
      
      {/* graphs container */}
      <div className='gap-4 bg-zinc-900 shadow-md shadow-zinc-800 p-2 md:p-4 rounded-md container mt-10 flex flex-col md:flex-row items-center justify-center'>
        <div className='w-1/2 space-y-5 h-full '>
          <Card className='flex size-[500px] text-slate-200  border-none  flex-col items-center justify-center bg-transparent'>
            <CardHeader className='items-center pb-0'>
              <CardTitle>Region Distribuition</CardTitle>
              <CardDescription>Distribuição de público no Brasil</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center pb-0">
              {/* region graph */}
              <div className='w-full'>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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

        {/* todo: gender grpah */}
        <div className='w-1/2 md:w-1/2 h-1/2'>
          <Card className="flex items-center justify-center flex-col bg-transparent text-slate-200 border-none size-[500px]">
            <CardHeader className="items-center pb-0">
              <CardTitle>Gender Distribuition</CardTitle>
              <CardDescription>Male - Female </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center pb-0">
              <ChartContainer
                config={pieChartConfig}
                className="mx-auto aspect-square max-h-[250px]"
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

      </div>
      
    </section>
  )
}
