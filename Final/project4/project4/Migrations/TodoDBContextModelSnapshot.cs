﻿// <auto-generated />
using AngularApplication.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace project4.Migrations
{
    [DbContext(typeof(TodoDBContext))]
    partial class TodoDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AngularApplication.Models.Todo", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Date");

                    b.Property<string>("Desc");

                    b.Property<string>("State");

                    b.Property<int>("WarnDay");

                    b.Property<int>("WarnHour");

                    b.HasKey("ID");

                    b.ToTable("Todo");
                });

            modelBuilder.Entity("project4.Models.Tag", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("TodoId");

                    b.HasKey("ID");

                    b.HasIndex("TodoId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("project4.Models.Tag", b =>
                {
                    b.HasOne("AngularApplication.Models.Todo")
                        .WithMany("Tags")
                        .HasForeignKey("TodoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}