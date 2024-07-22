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
import RegionGraph from '@/components/RegionGraph'
import GenderGraph from '@/components/GenderGraph'
import { AgeGraph } from '@/components/AgeGraph'


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
    <section className='w-full h-full flex-col items-center justify-center text-center'>
      <h2 className='text-white text-center text-3xl md:text-5xl mb-5'>Quem me acompanha?</h2>
      
      {/* graphs container */}
      <div className='overflow-hidden w-11/12 md:gap-6 max-h-screen md:max-w-full bg-zinc-900 shadow-md shadow-zinc-800 pb-4  md:p-4 rounded-md container md:mt-10 flex flex-col md:flex-row items-center justify-center'>
        <RegionGraph chartData={chartData} chartConfig={chartConfig}/>

        {/* todo: gender grpah */}
        {/* <GenderGraph pieChartConfig={pieChartConfig} pieChartData={pieChartData}/> */}
        <AgeGraph />
      </div>
        <div className='hidden md:block'>
          <span className='text-slate-200/50 font-semibold'>*valores meramente ilustrativos*</span>

        </div>
      
    </section>
  )
}
